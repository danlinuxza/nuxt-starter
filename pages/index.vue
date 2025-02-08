<script setup>
const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne()
);
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
definePageMeta({
  layout: "default",
});
</script>

<template>
  <Container>
    <!-- Hanko Authentication Component -->
    <hanko-auth></hanko-auth>

    <Hero
      :title="page.hero.title"
      :description="page.hero.description"
      :image="page.hero.image"
      :imageAlt="page.hero.imageAlt"
      :buttons="page.hero.buttons"
    ></Hero>
    <Logos :title="page.logos.title" :icons="page.logos.icons"></Logos>
    <Features
      :title="page.features.title"
      :description="page.features.description"
      :items="page.features.items"
    />
    <Testimonials
      :title="page.testimonials.title"
      :description="page.testimonials.description"
      :items="page.testimonials.items"
    />
    <Cta
      :title="page.cta.title"
      :description="page.cta.description"
      :buttons="page.cta.buttons"
    />
  </Container>
</template>
