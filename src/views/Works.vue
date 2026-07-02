<style lang="scss" scoped>
@import '@/styles/works.scss';
</style>

<template>
  <v-main>
    <v-container class="works-page" fluid>
      <section class="works-hero">
        <p class="section-label">{{ content.eyebrow }}</p>
        <h1>{{ content.title }}</h1>
        <p>{{ content.lead }}</p>
      </section>

      <section class="works-overview">
        <article
          v-for="summary in content.summaries"
          :key="summary.label"
          class="overview-item"
        >
          <v-icon color="#0f8c9b" size="28">{{ summary.icon }}</v-icon>
          <div>
            <span>{{ summary.label }}</span>
            <strong>{{ summary.value }}</strong>
          </div>
        </article>
      </section>

      <section class="works-list">
        <article
          v-for="work in content.works"
          :key="work.title"
          class="work-card"
        >
          <div class="work-card__meta">
            <span>{{ work.period }}</span>
            <span>{{ work.role }}</span>
          </div>
          <div class="work-card__heading">
            <v-icon color="#24313f" size="30">{{ work.icon }}</v-icon>
            <div>
              <h2>{{ work.title }}</h2>
              <p>{{ work.summary }}</p>
            </div>
          </div>

          <div class="work-block">
            <h3>{{ content.actionsLabel }}</h3>
            <ul>
              <li v-for="action in work.actions" :key="action">
                {{ action }}
              </li>
            </ul>
          </div>

          <div class="work-tags" :aria-label="content.techLabel">
            <span v-for="tech in work.tech" :key="tech">
              {{ tech }}
            </span>
          </div>
        </article>
      </section>

      <section class="works-next">
        <div>
          <p class="section-label">{{ content.nextLabel }}</p>
          <h2>{{ content.nextTitle }}</h2>
          <p>{{ content.nextText }}</p>
        </div>
        <router-link :to="localizedPath('skill')">
          <v-btn color="#009DAE" depressed>
            {{ content.nextCta }}
          </v-btn>
        </router-link>
      </section>
    </v-container>
  </v-main>
</template>

<script>
const worksJa = [
  {
    title: 'Difyを活用したRPAワークフロー構築',
    period: '2026年 - 現在',
    role: 'RPA開発 / 業務自動化',
    icon: 'mdi-robot-outline',
    summary:
      'Difyを活用し、帳票分析、サマリ作成、メール配信までをつなぐRPAワークフローの構築に取り組んでいます。',
    actions: [
      '帳票データを読み取り、必要な情報を抽出・整理する分析フローを設計',
      '分析結果をもとに、確認しやすいサマリを自動生成するワークフローを構築',
      '生成したサマリを関係者へメール配信する一連の業務自動化を実装',
    ],
    tech: ['Dify', 'RPA', '帳票分析', 'サマリ作成', 'メール配信', '業務自動化'],
  },
  {
    title: '生成AI・LLMを活用したデータ分析アプリケーション開発',
    period: '2026年 - 現在',
    role: 'アプリケーション開発 / データ分析支援',
    icon: 'mdi-brain',
    summary:
      'データの可視化にとどまらず、原因の深掘りと次のアクション案まで提示する分析支援アプリケーションの開発に携わっています。',
    actions: [
      '分析結果からインサイト、要因仮説、改善アクション案を生成する機能を設計・実装',
      'コンサルティングの思考プロセスをもとに、MECEを意識した出力設計を検討',
      'データベースや個別ファイルを扱えるよう、入力形式の違いを吸収する分析フローを整備',
      '社内のソースコード管理体系を見直し、開発・運用しやすい管理ルールづくりに参画',
    ],
    tech: ['生成AI', 'LLM', 'Python', 'データ分析', 'PDF', 'Excel', 'Database', 'Git'],
  },
  {
    title: '金融系電子取引プラットフォームのインフラ開発・運用',
    period: '2023年 - 2026年',
    role: 'インフラ開発・運用 / サブリーダー',
    icon: 'mdi-server-network',
    summary:
      '高い安定性が求められる金融系プラットフォームで、クラウドインフラの設計、構築、運用、改善を担当しました。',
    actions: [
      'AWSを用いたインフラ設計・構築・運用を担当',
      'CloudFormationによる構成管理と再現性向上に取り組む',
      '障害対応フローの整備、訓練自動化、運用報告書の作成を実施',
      'WAF、IAM、SecurityHubを活用したセキュリティ対策を推進',
      'CI/CD基盤の移行に対応し、JenkinsからGitHub Actionsへの移行を支援',
      'サブリーダーとしてタスク管理、進捗フォロー、関係部署との調整を担当',
    ],
    tech: ['AWS', 'EC2', 'RDS', 'Lambda', 'WAF', 'IAM', 'SecurityHub', 'CloudFormation', 'Jenkins', 'GitHub Actions'],
  },
  {
    title: '既存基盤のOS移行・インフラ更改',
    period: '2025年 - 2026年',
    role: 'インフラ更改 / 移行支援',
    icon: 'mdi-swap-horizontal',
    summary:
      '既存インフラのOS移行に伴い、影響範囲の確認、検証環境構築、移行手順整備、移行後確認までを担当しました。',
    actions: [
      '既存構成を調査し、OS移行に伴う影響範囲を整理',
      '新OS環境の検証用インスタンスを構築し、動作確認を実施',
      'ミドルウェア、設定ファイル、パッケージ差分を確認',
      '移行手順書と作業手順を作成し、移行作業と障害対応を支援',
    ],
    tech: ['AWS', 'EC2', 'Linux', 'Amazon Linux', 'Middleware', 'Shell', '運用設計'],
  },
  {
    title: '宿泊業向けWebアプリケーション開発',
    period: '2021年 - 2022年',
    role: 'フロントエンド開発',
    icon: 'mdi-web',
    summary:
      '宿泊業務の効率化を目的とした複数のWebアプリケーションで、SPA構成のフロントエンド開発とAPI連携を担当しました。',
    actions: [
      '宿泊業務に関わる情報収集・分析画面のフロントエンドを実装',
      '予約管理に必要な入力・管理画面を、利用者が迷いにくい構成で開発',
      'クラウド型管理システムのお問い合わせフォームや業務画面を実装',
      'API連携を前提に、画面状態と取得データを扱いやすい構成へ整理',
    ],
    tech: ['Vue.js', 'SPA', 'JavaScript', 'API連携', 'UI実装', 'フォーム実装'],
  },
]

const worksEn = [
  {
    title: 'RPA Workflow Development with Dify',
    period: '2026 - Present',
    role: 'RPA Development / Business Automation',
    icon: 'mdi-robot-outline',
    summary:
      'Building RPA workflows with Dify that connect form analysis, summary generation, and email delivery.',
    actions: [
      'Designed analysis flows that read form data and organize key information',
      'Built workflows that automatically generate easy-to-review summaries from analysis results',
      'Implemented automation that sends generated summaries to relevant stakeholders by email',
    ],
    tech: ['Dify', 'RPA', 'Form Analysis', 'Summary Generation', 'Email Delivery', 'Business Automation'],
  },
  {
    title: 'Data Analysis Application Using Generative AI and LLMs',
    period: '2026 - Present',
    role: 'Application Development / Data Analysis Support',
    icon: 'mdi-brain',
    summary:
      'Developing an analysis support application that goes beyond visualization by generating root-cause hypotheses and practical next actions.',
    actions: [
      'Designed and implemented features that generate insights, hypotheses, and improvement actions from analysis results',
      'Structured outputs around consulting-style, MECE-oriented thinking processes',
      'Improved analysis flows that can handle databases and individual files across different formats',
      'Helped organize internal source code management practices for easier development and operation',
    ],
    tech: ['Generative AI', 'LLM', 'Python', 'Data Analysis', 'PDF', 'Excel', 'Database', 'Git'],
  },
  {
    title: 'Infrastructure Development for a Financial Trading Platform',
    period: '2023 - 2026',
    role: 'Infrastructure Development and Operations / Sub Leader',
    icon: 'mdi-server-network',
    summary:
      'Designed, built, operated, and improved cloud infrastructure for a financial platform that required high stability.',
    actions: [
      'Handled infrastructure design, implementation, and operation using AWS',
      'Improved reproducibility and configuration management with CloudFormation',
      'Prepared incident response workflows, automated drills, and operational reports',
      'Advanced security measures using WAF, IAM, and SecurityHub',
      'Supported CI/CD migration from Jenkins to GitHub Actions',
      'Managed tasks, followed up on progress, and coordinated with related teams as a sub leader',
    ],
    tech: ['AWS', 'EC2', 'RDS', 'Lambda', 'WAF', 'IAM', 'SecurityHub', 'CloudFormation', 'Jenkins', 'GitHub Actions'],
  },
  {
    title: 'OS Migration and Infrastructure Renewal',
    period: '2025 - 2026',
    role: 'Infrastructure Renewal / Migration Support',
    icon: 'mdi-swap-horizontal',
    summary:
      'Supported OS migration for an existing infrastructure environment, from impact analysis and validation to migration procedures and post-migration checks.',
    actions: [
      'Investigated the existing infrastructure and clarified the impact scope of the OS migration',
      'Built validation instances for the new OS environment and confirmed behavior',
      'Checked differences in middleware, configuration files, and packages',
      'Created migration procedures and supported migration work, verification, and incident handling',
    ],
    tech: ['AWS', 'EC2', 'Linux', 'Amazon Linux', 'Middleware', 'Shell', 'Operations Design'],
  },
  {
    title: 'Web Application Development for Hospitality Operations',
    period: '2021 - 2022',
    role: 'Frontend Development',
    icon: 'mdi-web',
    summary:
      'Developed SPA-based frontend features and API integrations for web applications that supported more efficient hospitality operations.',
    actions: [
      'Implemented frontend screens for collecting and analyzing operational information',
      'Built simple management screens for reservation-related workflows',
      'Implemented inquiry forms and business screens for a cloud-based management system',
      'Organized UI state and fetched data for API-driven frontend development',
    ],
    tech: ['Vue.js', 'SPA', 'JavaScript', 'API Integration', 'UI Implementation', 'Form Implementation'],
  },
]

export default {
  computed: {
    content() {
      if (this.$route.params.lang === 'en') {
        return {
          eyebrow: 'Works',
          title: 'Selected Experience',
          lead:
            'A concise, public-facing summary of work across data analysis applications, cloud infrastructure, operations, and web development.',
          summaries: [
            { label: 'Focus', value: 'AI / Data / Infrastructure', icon: 'mdi-layers-triple-outline' },
            { label: 'Role', value: 'Development / Operations / Coordination', icon: 'mdi-account-hard-hat-outline' },
            { label: 'Style', value: 'Practical improvement from business context', icon: 'mdi-lightbulb-on-outline' },
          ],
          actionsLabel: 'Key Contributions',
          techLabel: 'Technologies and services',
          nextLabel: 'Skills',
          nextTitle: 'See the stack behind the work',
          nextText: 'The skills page summarizes technologies used across application development, infrastructure, operations, and security.',
          nextCta: 'View Skills',
          works: worksEn,
        }
      }

      return {
        eyebrow: 'Works',
        title: '実績',
        lead:
          'データ分析アプリケーション、クラウドインフラ、運用改善、Webアプリケーション開発に関する実績を、公開向けに要約しています。',
        summaries: [
          { label: '主な領域', value: 'AI / データ / インフラ', icon: 'mdi-layers-triple-outline' },
          { label: '役割', value: '開発 / 運用 / 調整', icon: 'mdi-account-hard-hat-outline' },
          { label: '強み', value: '事業文脈から実用的な改善へ', icon: 'mdi-lightbulb-on-outline' },
        ],
        actionsLabel: '主な取り組み',
        techLabel: '使用技術・サービス',
        nextLabel: 'Skills',
        nextTitle: '実績を支える技術スタック',
        nextText: 'アプリケーション開発、インフラ、運用、セキュリティで扱ってきた技術を整理しています。',
        nextCta: 'スキルを見る',
        works: worksJa,
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
