<template>
    <div class="w-full h-fit p-4">
        <h1 class="w-fit p-2 rounded-full bg-white shadow-sm">
            {{ title }}
        </h1>
    </div>
</template>

<script>

export default {
  props: ['title']
}

</script>