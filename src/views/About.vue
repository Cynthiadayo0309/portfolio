<style lang="scss" scoped>
@import '@/styles/about.scss';
</style>

<template>
  <v-main>
    <v-container class="about-page" fluid>
      <section class="about-hero">
        <div class="about-hero__copy">
          <p class="eyebrow">{{ content.eyebrow }}</p>
          <h1>{{ content.name }}</h1>
          <p class="lead">{{ content.lead }}</p>
          <div class="focus-tags">
            <span v-for="tag in content.focus" :key="tag">
              {{ tag }}
            </span>
          </div>
        </div>
        <div class="about-hero__visual" aria-hidden="true">
          <v-img
            src="@/assets/job.jpeg"
            height="100%"
            position="center center"
          />
        </div>
      </section>

      <section class="about-summary">
        <div class="summary-copy">
          <p class="section-label">{{ content.summaryLabel }}</p>
          <h2>{{ content.summaryTitle }}</h2>
          <p v-for="paragraph in content.summary" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
        <div class="summary-facts">
          <div v-for="fact in content.facts" :key="fact.label" class="fact-item">
            <span>{{ fact.label }}</span>
            <strong>{{ fact.value }}</strong>
          </div>
        </div>
      </section>

      <section class="career-section">
        <p class="section-label">{{ content.careerLabel }}</p>
        <h2>{{ content.careerTitle }}</h2>
        <div class="career-list">
          <article
            v-for="item in content.careers"
            :key="item.title"
            class="career-item"
          >
            <div class="career-period">
              <span>{{ item.period }}</span>
              <small>{{ item.duration }}</small>
            </div>
            <div class="career-marker" :class="item.kind">
              <v-icon color="white" size="22">{{ item.icon }}</v-icon>
            </div>
            <div class="career-content">
              <div class="career-heading">
                <div>
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.role }}</p>
                </div>
                <span v-if="item.current" class="current-badge">
                  {{ content.currentLabel }}
                </span>
              </div>
              <ul>
                <li v-for="point in item.points" :key="point">
                  {{ point }}
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section class="contact-strip">
        <p>{{ content.contactText }}</p>
        <div class="contact-actions">
          <router-link :to="localizedPath('works')">
            <v-btn color="#009DAE" depressed>
              {{ content.worksCta }}
            </v-btn>
          </router-link>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Cynthiadayo0309"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon color="#24313f" size="34">mdi-github</v-icon>
              </a>
            </template>
            <span>GitHub</span>
          </v-tooltip>
        </div>
      </section>
    </v-container>
  </v-main>
</template>

<script>
const careerJa = [
  {
    period: '2026年5月 - 現在',
    duration: '1ヶ月',
    title: 'データ分析系IT企業',
    role: 'データ分析アプリケーション開発',
    icon: 'mdi-chart-line',
    kind: 'work',
    current: true,
    points: [
      'データ分析アプリケーションの開発を担当',
      'お客様のデータ分析と改善案の提供を実施',
      '社内ソースコード管理体制の整備に参画',
    ],
  },
  {
    period: '2023年4月 - 2026年4月',
    duration: '4年間',
    title: '金融系IT企業',
    role: 'IT基盤サービス部 / サブリーダー',
    icon: 'mdi-server-network',
    kind: 'work',
    points: [
      '日本国債の電子取引プラットフォームにおけるインフラ構築・運用・保守を担当',
      '保険系顧客向けの基盤更改案件に参画',
      '社内の情報セキュリティ委員を兼務し、ISMSの運用に従事',
    ],
  },
  {
    period: '2021年6月 - 2022年11月',
    duration: '2年間',
    title: '宿泊業向けSaaS企業',
    role: 'システム開発 / アルバイト',
    icon: 'mdi-code-tags',
    kind: 'work',
    points: [
      'ホテル・旅館を対象としたアプリケーション開発を担当',
      'フロントエンドとバックエンドの実装を経験',
      '開発を通じてインフラ領域への関心を深める',
    ],
  },
  {
    period: '2019年4月 - 2023年3月',
    duration: '4年間',
    title: '淑徳大学',
    role: '総合福祉学部 / 実践心理学科',
    icon: 'mdi-school',
    kind: 'education',
    points: [
      '心理学の概論、研究法、統計法を体系的に学習',
      '組織心理学、社会心理学、発達心理学に加え、経済政策や労働法なども学ぶ',
      '研究テーマは「嘘に対する子供の道徳的判断に関する研究」',
    ],
  },
  {
    period: '2017年4月 - 2019年3月',
    duration: '2年間',
    title: '神田外語学院',
    role: 'ヨーロッパ言語科 / スペイン語コース',
    icon: 'mdi-translate',
    kind: 'education',
    points: [
      '英語とスペイン語を専攻',
      '異なる文化や価値観を理解しながら伝える姿勢を身につける',
    ],
  },
]

const careerEn = [
  {
    period: 'May 2026 - Present',
    duration: '1 month',
    title: 'Data Analysis Technology Company',
    role: 'Data Analysis Application Development',
    icon: 'mdi-chart-line',
    kind: 'work',
    current: true,
    points: [
      'Developing data analysis applications',
      'Analyzing customer data and proposing improvements',
      'Improving internal source code management practices',
    ],
  },
  {
    period: 'Apr 2023 - Apr 2026',
    duration: '4 years',
    title: 'Financial Technology Company',
    role: 'IT Infrastructure Services / Sub Leader',
    icon: 'mdi-server-network',
    kind: 'work',
    points: [
      'Built, operated, and maintained infrastructure for an electronic Japanese government bond trading platform',
      'Joined an infrastructure renewal project for an insurance-sector customer',
      'Served on the internal information security committee and supported ISMS operations',
    ],
  },
  {
    period: 'Jun 2021 - Nov 2022',
    duration: '2 years',
    title: 'Hospitality SaaS Company',
    role: 'System Development / Part-time',
    icon: 'mdi-code-tags',
    kind: 'work',
    points: [
      'Developed applications for hotels and ryokans',
      'Worked across frontend and backend implementation',
      'Developed a stronger interest in infrastructure through application development',
    ],
  },
  {
    period: 'Apr 2019 - Mar 2023',
    duration: '4 years',
    title: 'Shukutoku University',
    role: 'Faculty of Integrated Human and Social Welfare Studies / Practical Psychology',
    icon: 'mdi-school',
    kind: 'education',
    points: [
      'Studied psychology fundamentals, research methods, and statistics',
      'Learned organizational psychology, social psychology, developmental psychology, economic policy, and labor law',
      'Research theme: moral judgment in children regarding lies',
    ],
  },
  {
    period: 'Apr 2017 - Mar 2019',
    duration: '2 years',
    title: 'Kanda Institute of Foreign Languages',
    role: 'European Languages / Spanish Course',
    icon: 'mdi-translate',
    kind: 'education',
    points: [
      'Majored in English and Spanish',
      'Built a foundation for communicating across cultures and perspectives',
    ],
  },
]

export default {
  computed: {
    content() {
      if (this.$route.params.lang === 'en') {
        return {
          eyebrow: 'About Me',
          name: 'Kosuke Aoki',
          lead:
            'Engineer with experience in data analysis application development, infrastructure operations, and information security.',
          focus: ['Data Analysis', 'Infrastructure', 'Application Development', 'ISMS'],
          summaryLabel: 'Profile',
          summaryTitle: 'Turning business context into practical systems',
          summary: [
            'I have worked across application development and infrastructure operations, from building services to maintaining platforms that need stability.',
            'My background in psychology, statistics, and languages helps me listen carefully, organize ambiguous requirements, and communicate across teams.',
          ],
          facts: [
            { label: 'Current', value: 'Data Analysis Technology Company' },
            { label: 'Experience', value: 'App Dev / Infrastructure / ISMS' },
            { label: 'Background', value: 'Psychology / Statistics / Languages' },
          ],
          careerLabel: 'Career',
          careerTitle: 'Experience and Education',
          currentLabel: 'Current',
          contactText: 'Code and personal projects are available on GitHub.',
          worksCta: 'View Works',
          careers: careerEn,
        }
      }

      return {
        eyebrow: 'About Me',
        name: '青木 孝輔',
        lead:
          'データ分析アプリケーション開発、インフラ運用、情報セキュリティの経験を持つエンジニアです。',
        focus: ['データ分析', 'インフラ', 'アプリ開発', 'ISMS'],
        summaryLabel: 'Profile',
        summaryTitle: '事業の文脈をくみ取り、実用的なシステムに落とし込む',
        summary: [
          'アプリケーション開発とインフラ運用の両面を経験し、作るだけでなく、安定して使われ続ける仕組みづくりに関心を持っています。',
          '心理学・統計・語学を学んだ背景を活かし、曖昧な課題を整理しながら、チームやお客様と丁寧にすり合わせて進めることを大切にしています。',
        ],
        facts: [
          { label: '現在', value: 'データ分析系IT企業' },
          { label: '経験領域', value: 'アプリ開発 / インフラ / ISMS' },
          { label: '学習背景', value: '心理学 / 統計 / 語学' },
        ],
        careerLabel: 'Career',
        careerTitle: '職歴・学歴',
        currentLabel: '現在',
        contactText: '制作物やコードはGitHubでも公開しています。',
        worksCta: '実績を見る',
        careers: careerJa,
      }
    },
  },
  methods: {
    localizedPath(page) {
      const lang = this.$route.params.lang === 'en' ? 'en' : 'ja'
      return `/${lang}/${page}`
    },
  },
}
</script>
