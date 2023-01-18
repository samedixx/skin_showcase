<template>
    <div class="authPopup fixed left-0 top-0 right-0 bottom-0 z-50 bg-popup-overlay flex items-center justify-center">
        <div class="popup-inner bg-white p-5 rounded shadow-xl">
            <div @click="closePopup" class="pop_action flex justify-end cursor-pointer"><svg class="text-gray" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><line x1="13" y1="1" x2="1" y2="13" fill="none" stroke="#404040" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line><line x1="1" y1="1" x2="13" y2="13" fill="none" stroke="#404040" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></line></g></g></svg></div>
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'AuthPopup',
    props: {
        closePopup: Function
    }

}
</script>