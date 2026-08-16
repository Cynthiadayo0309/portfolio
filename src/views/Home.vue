<style lang="scss">
@import '@/styles/index.scss';
@import '@/styles/home.scss';
</style>

<template>
  <v-main>
    <v-container class="home-page" fluid>
      <section class="home-hero">
        <div class="home-hero__copy">
          <p class="section-label">{{ content.eyebrow }}</p>
          <h1>{{ content.title }}</h1>
          <p class="lead">{{ content.lead }}</p>
          <div class="home-tags">
            <span v-for="tag in content.tags" :key="tag">
              {{ tag }}
            </span>
          </div>
          <div class="home-actions">
            <router-link :to="localizedPath('works')">
              <v-btn color="#009DAE" depressed>
                {{ content.primaryCta }}
              </v-btn>
            </router-link>
            <router-link :to="localizedPath('about')">
              <v-btn color="#24313f" outlined>
                {{ content.secondaryCta }}
              </v-btn>
            </router-link>
          </div>
        </div>
        <div class="home-hero__visual" aria-hidden="true">
          <div class="visual-panel">
            <span>{{ content.visualLabel }}</span>
            <strong>{{ content.visualTitle }}</strong>
            <p>{{ content.visualText }}</p>
          </div>
        </div>
      </section>

      <section class="home-focus">
        <article
          v-for="item in content.focus"
          :key="item.title"
          class="focus-item"
        >
          <v-icon color="#0f8c9b" size="30">{{ item.icon }}</v-icon>
          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
        </article>
      </section>
    </v-container>
  </v-main>
</template>

<script>
export default {
  computed: {
    currentLang() {
      const lang = this.$route.params.lang === 'en' ? 'en' : 'ja'
      return lang
    },
    content() {
      if (this.currentLang === 'en') {
        return {
          eyebrow: 'Kosuke Aoki',
          title: 'Building systems that keep working',
          lead:
            'I work across application development, cloud infrastructure, CI/CD, generative AI, and information security to build systems that stay useful in real operations.',
          tags: ['Application Development', 'Cloud Operations', 'DevOps', 'Generative AI / LLM'],
          primaryCta: 'View Works',
          secondaryCta: 'About Me',
          visualLabel: 'Current Focus',
          visualTitle: 'Application development with AI',
          visualText:
            'Building practical applications that combine implementation, operations, and AI-assisted workflows.',
          focus: [
            {
              icon: 'mdi-code-braces',
              title: 'Application Development',
              text: 'Building web applications with frontend, backend, API integration, data handling, and generative AI features.',
            },
            {
              icon: 'mdi-server-network',
              title: 'Cloud and Operations',
              text: 'Designing, operating, and improving cloud environments where stability, repeatability, and maintenance matter.',
            },
            {
              icon: 'mdi-robot-outline',
              title: 'AI and Workflow Support',
              text: 'Using generative AI and LLMs to support research, analysis, documentation, automation, and day-to-day work.',
            },
          ],
        }
      }

      return {
        eyebrow: 'Kosuke Aoki',
        title: '使われ続ける仕組みをつくる',
        lead:
          'アプリケーション開発、クラウドインフラ、CI/CD、生成AI活用、情報セキュリティまで。開発と運用の両面から、現場に根づくシステムづくりに取り組んでいます。',
        tags: ['アプリケーション開発', 'クラウド運用', 'DevOps', '生成AI / LLM'],
        primaryCta: '実績を見る',
        secondaryCta: 'プロフィール',
        visualLabel: 'Current Focus',
        visualTitle: 'AIを活用したアプリケーション開発',
        visualText:
          '実装、運用、業務支援をつなぐ実用的なアプリケーションづくりに取り組んでいます。',
        focus: [
          {
            icon: 'mdi-code-braces',
            title: 'アプリケーション開発',
            text: '業務画面、API連携、データ活用、生成AI連携など、目的に合わせたWebアプリケーションを実装します。',
          },
          {
            icon: 'mdi-server-network',
            title: 'クラウド・運用改善',
            text: 'AWS、GCS、CI/CD、監視、障害対応など、安定運用を支える基盤づくりを経験しています。',
          },
          {
            icon: 'mdi-robot-outline',
            title: 'AI・業務支援',
            text: '生成AIやLLMを活用し、調査、分析、資料整理、業務自動化を支援する仕組みを形にします。',
          },
        ],
      }
    },
  },
  methods: {
    localizedPath(page) {
      return `/${this.currentLang}/${page}`
    },
  },
}
</script> 
