<!--
 * @Description: Controller
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2022-11-29 15:21:38
 * @LastEditTime: 2023-02-15 11:05:20
 * @LastEditors: 安知鱼
-->
<script lang="ts" setup>
import AnzhiyuButton from "@/components/anzhiyu-button.vue";
// import { getAssetURL } from "@/utils/load_assets";
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();

let { status } = storeToRefs(homeStore) as any;
let playStartSoundTimeoutId: any;
let playWorkSoundTimeoutId: any;
let playWorkSoundIntervalId: any;

/**
 * 播放「嘀」的音效
 */
function playDi() {
  const di = document.getElementById("di");
  if (di) (di as HTMLAudioElement).play();
}

/**
 * 播放空调启动声音
 */
function playStartSound() {
  const acStart = document.getElementById("ac-work") as HTMLAudioElement;
  acStart.load();
  acStart.play();

  const acWork = document.getElementById("air-extractor-fan") as HTMLAudioElement;
  acWork.load();
  acWork.pause();
  playStartSoundTimeoutId = setTimeout(() => {
    playWorkSound();
  }, 8000);
}

// 噪音起始时间
const noiseStartTime = 2;
// 噪音持续时间
const noiseDuration = 56;

/**
 * 播放空调工作声音
 */
function playWorkSound() {
  const acWork = document.getElementById("air-extractor-fan") as HTMLAudioElement;
  acWork.load();
  acWork.play();

  playWorkSoundTimeoutId = setTimeout(() => {
    playWorkSoundIntervalId = setInterval(() => {
      acWork.currentTime = noiseStartTime;
    }, noiseDuration * 1000);
  }, noiseStartTime * 1000);
}

/**
 * 切换空调工作状态
 */
function toggleAC(status: boolean) {
  playDi();
  console.log(status);

  if (status) {
    (document.getElementById("ac-work") as HTMLAudioElement).load();
    const acWork = document.getElementById("air-extractor-fan") as HTMLAudioElement;
    if (playStartSoundTimeoutId) clearTimeout(playStartSoundTimeoutId);

    if (playWorkSoundTimeoutId) clearTimeout(playWorkSoundTimeoutId);

    if (playWorkSoundIntervalId) clearInterval(playWorkSoundIntervalId);

    // acWork.currentTime = noiseStartTime + noiseDuration;

    acWork.currentTime = acWork.duration - 2;
  } else {
    playStartSound();
  }
  homeStore.changeStatus();
}

// const SOUND_DI_PATH = getAssetURL("audio/di.m4a");
// const SOUND_AC_WORK_PATH = getAssetURL("audio/ac-work.m4a");
// const SOUND_AIR_EXTRACTOR_FAN_PATH = getAssetURL("audio/air-extractor-fan.m4a");
const SOUND_DI_PATH = "https://npm.elemecdn.com/anzhiyu-air-conditioner@1.0.0/di.m4a";
const SOUND_AC_WORK_PATH = "https://npm.elemecdn.com/anzhiyu-air-conditioner@1.0.0/ac-work.m4a";
const SOUND_AIR_EXTRACTOR_FAN_PATH =
  "https://npm.elemecdn.com/anzhiyu-air-conditioner@1.0.0/air-extractor-fan.m4a";
const SOUND_DI_PATH_MP3 = "https://npm.elemecdn.com/anzhiyu-air-conditioner@1.0.0/di.mp3";
const SOUND_AC_WORK_PATH_MP3 = "https://npm.elemecdn.com/anzhiyu-air-conditioner@1.0.0/ac-work.mp3";
const SOUND_AIR_EXTRACTOR_FAN_PATH_MP3 =
  "https://npm.elemecdn.com/anzhiyu-air-conditioner@1.0.0/air-extractor-fan.mp3";
</script>

<template>
  <div class="air-conditioner-controller">
    <audio id="di">
      <source :src="SOUND_DI_PATH" preload="auto" />
      <source :src="SOUND_DI_PATH_MP3" type="audio/mpeg" preload="auto" />
      您的浏览器不支持audio标记（元素）
    </audio>
    <audio id="ac-work">
      <source :src="SOUND_AC_WORK_PATH" preload="auto" />
      <source :src="SOUND_AC_WORK_PATH_MP3" type="audio/mpeg" preload="auto" />
      您的浏览器不支持audio标记（元素）
    </audio>
    <audio id="air-extractor-fan">
      <source :src="SOUND_AIR_EXTRACTOR_FAN_PATH" preload="auto" />
      <source :src="SOUND_AIR_EXTRACTOR_FAN_PATH_MP3" type="audio/mpeg" preload="auto" />
      您的浏览器不支持audio标记（元素）
    </audio>

    <div>
      <AnzhiyuButton
        type="primary"
        round
        size="large"
        class="clod-btn"
        @click="
          playDi();
          homeStore.changeMode('clod');
        "
      >
        <template #default>
          <div class="clod-icon"></div>
        </template>
      </AnzhiyuButton>

      <AnzhiyuButton
        :type="status ? 'danger' : 'success'"
        round
        size="large"
        class="clod-btn"
        @click="toggleAC(status)"
      >
        <template #default>
          <div class="seting-icon"></div>
        </template>
      </AnzhiyuButton>

      <AnzhiyuButton
        type="warning"
        round
        size="large"
        class="clod-btn"
        @click="
          playDi();
          homeStore.changeMode('hot');
        "
      >
        <template #default>
          <div class="sunny-icon"></div>
        </template>
      </AnzhiyuButton>
    </div>
    <AnzhiyuButton
      round
      size="large"
      class="clod-btn"
      @click="
        playDi();
        homeStore.addTemperature();
      "
    >
      <template #default>
        <div class="triangle-up-icon"></div>
      </template>
    </AnzhiyuButton>
    <AnzhiyuButton
      round
      size="large"
      class="clod-btn"
      @click="
        playDi();
        homeStore.subTemperature();
      "
    >
      <template #default>
        <div class="triangle-down-icon"></div>
      </template>
    </AnzhiyuButton>
  </div>
</template>

<style scoped lang="scss">
.air-conditioner-controller {
  display: flex;
  flex-direction: column;
  align-items: center;
  .air-conditioner-controller-icon {
    mask: var(--un-icon) no-repeat;
    mask-size: 100% 100%;
    -webkit-mask: var(--un-icon) no-repeat;
    -webkit-mask-size: 100% 100%;
    background-color: currentColor;
    width: 2em;
    height: 2em;
  }

  .clod-btn {
    width: 56px;
    height: 56px;
    margin: 8px;
    .clod-icon {
      --un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M21 11h-3.17l2.54-2.54a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0L15 11h-2V9l3.95-3.95c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0L13 6.17V3c0-.55-.45-1-1-1s-1 .45-1 1v3.17L8.46 3.63a.996.996 0 0 0-1.41 0c-.39.39-.39 1.03 0 1.42L11 9v2H9L5.05 7.05c-.39-.39-1.03-.39-1.42 0a.996.996 0 0 0 0 1.41L6.17 11H3c-.55 0-1 .45-1 1s.45 1 1 1h3.17l-2.54 2.54a.996.996 0 0 0 0 1.41c.39.39 1.03.39 1.42 0L9 13h2v2l-3.95 3.95c-.39.39-.39 1.03 0 1.42c.39.39 1.02.39 1.41 0L11 17.83V21c0 .55.45 1 1 1s1-.45 1-1v-3.17l2.54 2.54c.39.39 1.02.39 1.41 0c.39-.39.39-1.03 0-1.42L13 15v-2h2l3.95 3.95c.39.39 1.03.39 1.42 0a.996.996 0 0 0 0-1.41L17.83 13H21c.55 0 1-.45 1-1s-.45-1-1-1z'/%3E%3C/svg%3E");
      @extend .air-conditioner-controller-icon;
    }
    .seting-icon {
      --un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12 3c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1zm5.14 2.86a.99.99 0 0 0-.01 1.39c1.13 1.2 1.83 2.8 1.87 4.57c.09 3.83-3.08 7.13-6.91 7.17A6.981 6.981 0 0 1 5 12c0-1.84.71-3.51 1.87-4.76c.37-.39.37-1-.01-1.38a.993.993 0 0 0-1.43.02A8.92 8.92 0 0 0 3 11.74c-.14 4.88 3.83 9.1 8.71 9.25c5.1.16 9.29-3.93 9.29-9c0-2.37-.92-4.51-2.42-6.11c-.38-.41-1.04-.42-1.44-.02z'/%3E%3C/svg%3E");
      mask: var(--un-icon) no-repeat;
      mask-size: 100% 100%;
      -webkit-mask: var(--un-icon) no-repeat;
      -webkit-mask-size: 100% 100%;
      background-color: currentColor;
      width: 2em;
      height: 2em;
    }
    .sunny-icon {
      --un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m6.05 4.14l-.39-.39a.993.993 0 0 0-1.4 0l-.01.01a.984.984 0 0 0 0 1.4l.39.39c.39.39 1.01.39 1.4 0l.01-.01a.984.984 0 0 0 0-1.4zM3.01 10.5H1.99c-.55 0-.99.44-.99.99v.01c0 .55.44.99.99.99H3c.56.01 1-.43 1-.98v-.01c0-.56-.44-1-.99-1zm9-9.95H12c-.56 0-1 .44-1 .99v.96c0 .55.44.99.99.99H12c.56.01 1-.43 1-.98v-.97c0-.55-.44-.99-.99-.99zm7.74 3.21c-.39-.39-1.02-.39-1.41-.01l-.39.39a.984.984 0 0 0 0 1.4l.01.01c.39.39 1.02.39 1.4 0l.39-.39a.984.984 0 0 0 0-1.4zm-1.81 15.1l.39.39a.996.996 0 1 0 1.41-1.41l-.39-.39a.993.993 0 0 0-1.4 0c-.4.4-.4 1.02-.01 1.41zM20 11.49v.01c0 .55.44.99.99.99H22c.55 0 .99-.44.99-.99v-.01c0-.55-.44-.99-.99-.99h-1.01c-.55 0-.99.44-.99.99zM12 5.5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6zm-.01 16.95H12c.55 0 .99-.44.99-.99v-.96c0-.55-.44-.99-.99-.99h-.01c-.55 0-.99.44-.99.99v.96c0 .55.44.99.99.99zm-7.74-3.21c.39.39 1.02.39 1.41 0l.39-.39a.993.993 0 0 0 0-1.4l-.01-.01a.996.996 0 0 0-1.41 0l-.39.39c-.38.4-.38 1.02.01 1.41z'/%3E%3C/svg%3E");
      @extend .air-conditioner-controller-icon;
    }
    .triangle-up-icon {
      --un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M8 15h8l-4-7'/%3E%3C/svg%3E");
      @extend .air-conditioner-controller-icon;
      width: 3em;
      height: 3em;
    }
    .triangle-down-icon {
      --un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M8 9h8l-4 7'/%3E%3C/svg%3E");
      @extend .air-conditioner-controller-icon;
      width: 3em;
      height: 3em;
    }
  }
}
</style>
