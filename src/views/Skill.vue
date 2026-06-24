<style lang="scss" scoped>
@import '@/styles/skill.scss';
</style>

<template>
  <v-main>
    <v-container class="skill-page" fluid>
      <section class="skill-hero">
        <p class="section-label">{{ content.eyebrow }}</p>
        <h1>{{ content.title }}</h1>
        <p>{{ content.lead }}</p>
      </section>

      <section class="skill-highlights">
        <article
          v-for="highlight in content.highlights"
          :key="highlight.label"
          class="highlight-item"
        >
          <v-icon color="#0f8c9b" size="28">{{ highlight.icon }}</v-icon>
          <div>
            <span>{{ highlight.label }}</span>
            <strong>{{ highlight.value }}</strong>
          </div>
        </article>
      </section>

      <section class="skill-legend" :aria-label="content.legendLabel">
        <span
          v-for="level in content.legend"
          :key="level.key"
          class="skill-level"
          :class="level.key"
        >
          {{ level.label }}
        </span>
        <p>{{ content.legendText }}</p>
      </section>

      <section class="skill-groups">
        <article
          v-for="group in content.groups"
          :key="group.title"
          class="skill-group"
        >
          <div class="skill-group__heading">
            <v-icon color="#24313f" size="28">{{ group.icon }}</v-icon>
            <div>
              <h2>{{ group.title }}</h2>
              <p>{{ group.description }}</p>
            </div>
          </div>

          <div class="skill-list">
            <div
              v-for="skill in group.skills"
              :key="skill.name"
              class="skill-item"
            >
              <div class="skill-name">
                <v-icon color="#0f8c9b" size="20">{{ skill.icon }}</v-icon>
                <span>{{ skill.name }}</span>
              </div>
              <span class="skill-level" :class="skill.level">
                {{ levelLabel(skill.level) }}
              </span>
            </div>
          </div>
        </article>
      </section>
    </v-container>
  </v-main>
</template>

<script>
const groupsJa = [
  {
    title: 'アプリケーション開発',
    description: 'フロントエンド、バックエンド、データ分析アプリケーション開発で使用してきた技術です。',
    icon: 'mdi-code-braces',
    skills: [
      { name: 'Vue.js', level: 'experienced', icon: 'mdi-vuejs' },
      { name: 'Vuetify', level: 'experienced', icon: 'mdi-view-dashboard' },
      { name: 'JavaScript', level: 'experienced', icon: 'mdi-language-javascript' },
      { name: 'TypeScript', level: 'working', icon: 'mdi-language-typescript' },
      { name: 'Python', level: 'working', icon: 'mdi-language-python' },
      { name: 'Ruby', level: 'basic', icon: 'mdi-language-ruby' },
      { name: 'Ruby on Rails', level: 'basic', icon: 'mdi-train' },
      { name: 'PHP', level: 'basic', icon: 'mdi-language-php' },
    ],
  },
  {
    title: 'クラウド・インフラ',
    description: '運用・保守や環境構築、ストレージ利用などで触れてきたサービスです。',
    icon: 'mdi-cloud-outline',
    skills: [
      { name: 'AWS', level: 'working', icon: 'mdi-aws' },
      { name: 'GCS', level: 'working', icon: 'mdi-google-cloud' },
      { name: 'Docker', level: 'basic', icon: 'mdi-docker' },
      { name: 'Firebase', level: 'basic', icon: 'mdi-firebase' },
      { name: 'Heroku', level: 'basic', icon: 'mdi-cloud-upload' },
    ],
  },
  {
    title: 'DevOps・運用',
    description: 'ソースコード管理、CI/CD、障害対応、チーム開発で利用してきたツールです。',
    icon: 'mdi-source-branch',
    skills: [
      { name: 'GitHub', level: 'experienced', icon: 'mdi-github' },
      { name: 'GitHub Actions', level: 'working', icon: 'mdi-play-circle-outline' },
      { name: 'Jenkins', level: 'working', icon: 'mdi-cog-sync' },
      { name: 'JIRA', level: 'working', icon: 'mdi-clipboard-check-outline' },
      { name: 'Slack', level: 'experienced', icon: 'mdi-slack' },
      { name: 'PagerDuty', level: 'working', icon: 'mdi-bell-alert-outline' },
    ],
  },
  {
    title: 'セキュリティ・業務ツール',
    description: '情報セキュリティ活動や日々の業務推進で扱ってきたツール・領域です。',
    icon: 'mdi-shield-check-outline',
    skills: [
      { name: 'Yamory', level: 'working', icon: 'mdi-shield-search' },
      { name: 'ISMS運用', level: 'working', icon: 'mdi-file-certificate-outline' },
      { name: 'Microsoft 365 / Office', level: 'experienced', icon: 'mdi-microsoft' },
      { name: 'Photoshop', level: 'basic', icon: 'mdi-image-edit-outline' },
      { name: 'Illustrator', level: 'basic', icon: 'mdi-vector-square' },
    ],
  },
]

const groupsEn = [
  {
    title: 'Application Development',
    description: 'Technologies used across frontend, backend, and data analysis application development.',
    icon: 'mdi-code-braces',
    skills: [
      { name: 'Vue.js', level: 'experienced', icon: 'mdi-vuejs' },
      { name: 'Vuetify', level: 'experienced', icon: 'mdi-view-dashboard' },
      { name: 'JavaScript', level: 'experienced', icon: 'mdi-language-javascript' },
      { name: 'TypeScript', level: 'working', icon: 'mdi-language-typescript' },
      { name: 'Python', level: 'working', icon: 'mdi-language-python' },
      { name: 'Ruby', level: 'basic', icon: 'mdi-language-ruby' },
      { name: 'Ruby on Rails', level: 'basic', icon: 'mdi-train' },
      { name: 'PHP', level: 'basic', icon: 'mdi-language-php' },
    ],
  },
  {
    title: 'Cloud and Infrastructure',
    description: 'Services used for operations, maintenance, environment setup, and storage.',
    icon: 'mdi-cloud-outline',
    skills: [
      { name: 'AWS', level: 'working', icon: 'mdi-aws' },
      { name: 'GCS', level: 'working', icon: 'mdi-google-cloud' },
      { name: 'Docker', level: 'basic', icon: 'mdi-docker' },
      { name: 'Firebase', level: 'basic', icon: 'mdi-firebase' },
      { name: 'Heroku', level: 'basic', icon: 'mdi-cloud-upload' },
    ],
  },
  {
    title: 'DevOps and Operations',
    description: 'Tools used for source control, CI/CD, incident response, and team delivery.',
    icon: 'mdi-source-branch',
    skills: [
      { name: 'GitHub', level: 'experienced', icon: 'mdi-github' },
      { name: 'GitHub Actions', level: 'working', icon: 'mdi-play-circle-outline' },
      { name: 'Jenkins', level: 'working', icon: 'mdi-cog-sync' },
      { name: 'JIRA', level: 'working', icon: 'mdi-clipboard-check-outline' },
      { name: 'Slack', level: 'experienced', icon: 'mdi-slack' },
      { name: 'PagerDuty', level: 'working', icon: 'mdi-bell-alert-outline' },
    ],
  },
  {
    title: 'Security and Business Tools',
    description: 'Tools and practices used for information security and day-to-day business operations.',
    icon: 'mdi-shield-check-outline',
    skills: [
      { name: 'Yamory', level: 'working', icon: 'mdi-shield-search' },
      { name: 'ISMS Operations', level: 'working', icon: 'mdi-file-certificate-outline' },
      { name: 'Microsoft 365 / Office', level: 'experienced', icon: 'mdi-microsoft' },
      { name: 'Photoshop', level: 'basic', icon: 'mdi-image-edit-outline' },
      { name: 'Illustrator', level: 'basic', icon: 'mdi-vector-square' },
    ],
  },
]

export default {
  computed: {
    content() {
      if (this.$route.params.lang === 'en') {
        return {
          eyebrow: 'Skills',
          title: 'Technology Stack',
          lead:
            'A practical skill set spanning application development, cloud infrastructure, DevOps, security, and collaboration tools.',
          highlights: [
            { label: 'Main Areas', value: 'App Dev / Infra / Data', icon: 'mdi-layers-triple-outline' },
            { label: 'Operations', value: 'CI/CD / Monitoring / ISMS', icon: 'mdi-monitor-dashboard' },
            { label: 'Collaboration', value: 'JIRA / Slack / Microsoft 365', icon: 'mdi-account-group-outline' },
          ],
          levels: {
            experienced: 'Experienced',
            working: 'Working Knowledge',
            basic: 'Basic',
          },
          legendLabel: 'Skill level guide',
          legendText:
            'Levels are a practical guide based on usage in work, operations, or personal development.',
          legend: [
            { key: 'experienced', label: 'Experienced' },
            { key: 'working', label: 'Used in Work' },
            { key: 'basic', label: 'Familiar' },
          ],
          groups: groupsEn,
        }
      }

      return {
        eyebrow: 'Skills',
        title: '技術スタック',
        lead:
          'アプリケーション開発、クラウド・インフラ、DevOps、セキュリティ、チーム開発ツールまで、実務で扱ってきた技術を整理しています。',
        highlights: [
          { label: '主な領域', value: 'アプリ開発 / インフラ / データ', icon: 'mdi-layers-triple-outline' },
          { label: '運用経験', value: 'CI/CD / 監視 / ISMS', icon: 'mdi-monitor-dashboard' },
          { label: 'チーム開発', value: 'JIRA / Slack / Microsoft 365', icon: 'mdi-account-group-outline' },
        ],
        levels: {
          experienced: '経験あり',
          working: '実務利用',
          basic: '基礎経験',
        },
        legendLabel: 'スキルレベルの目安',
        legendText:
          '実務、運用、個人開発での利用経験をもとにした目安です。',
        legend: [
          { key: 'experienced', label: '経験あり' },
          { key: 'working', label: '実務利用' },
          { key: 'basic', label: '基礎経験' },
        ],
        groups: groupsJa,
      }
    },
  },
  methods: {
    levelLabel(level) {
      return this.content.levels[level]
    },
  },
}
</script>
