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
          eyebrow: 'Portfolio',
          title: 'Data, infrastructure, and operations turned into practical systems.',
          lead:
            'I build and improve systems across data analysis applications, cloud infrastructure, CI/CD, operations, and information security.',
          tags: ['Data Analysis', 'Cloud Infrastructure', 'Operations Improvement', 'Generative AI / LLM'],
          primaryCta: 'View Works',
          secondaryCta: 'About Me',
          visualLabel: 'Current Focus',
          visualTitle: 'AI-assisted data analysis',
          visualText:
            'Building applications that connect business context, analysis results, and next actions.',
          focus: [
            {
              icon: 'mdi-brain',
              title: 'Data and AI',
              text: 'Developing data analysis applications that use generative AI and LLMs to support insights and actions.',
            },
            {
              icon: 'mdi-server-network',
              title: 'Infrastructure',
              text: 'Designing, operating, and improving cloud infrastructure where stability and repeatability matter.',
            },
            {
              icon: 'mdi-source-branch',
              title: 'Delivery',
              text: 'Supporting CI/CD, source code management, task coordination, and team operations.',
            },
          ],
        }
      }

      return {
        eyebrow: 'Portfolio',
        title: 'データ、インフラ、運用改善を実用的な仕組みに落とし込む。',
        lead:
          'データ分析アプリケーション、クラウドインフラ、CI/CD、運用改善、情報セキュリティまで、事業の文脈に合わせて開発・改善に取り組んでいます。',
        tags: ['データ分析', 'クラウドインフラ', '運用改善', '生成AI / LLM'],
        primaryCta: '実績を見る',
        secondaryCta: 'プロフィール',
        visualLabel: 'Current Focus',
        visualTitle: 'AIを活用したデータ分析支援',
        visualText:
          '業務課題、分析結果、次のアクションをつなぐアプリケーション開発に取り組んでいます。',
        focus: [
          {
            icon: 'mdi-brain',
            title: 'データ・AI',
            text: '生成AI・LLMを活用し、インサイトや改善アクションにつながるデータ分析アプリケーションを開発しています。',
          },
          {
            icon: 'mdi-server-network',
            title: 'インフラ',
            text: '安定性と再現性が求められるクラウド基盤の設計、構築、運用、改善を経験しています。',
          },
          {
            icon: 'mdi-source-branch',
            title: '開発・運用推進',
            text: 'CI/CD、ソースコード管理、タスク調整、障害対応フロー整備など、チームで使い続けられる仕組みづくりを支援します。',
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
