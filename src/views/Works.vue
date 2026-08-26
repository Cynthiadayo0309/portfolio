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

      <section class="care-case-study" :aria-labelledby="'care-case-study-title-' + currentLang">
        <header class="care-case-study__header">
          <p class="section-label">{{ content.careCaseStudy.eyebrow }}</p>
          <h2 :id="'care-case-study-title-' + currentLang">{{ content.careCaseStudy.title }}</h2>
          <p>{{ content.careCaseStudy.lead }}</p>
        </header>

        <section class="care-adoption" :aria-labelledby="'care-adoption-title-' + currentLang">
          <v-icon color="#0f8c9b" size="32">mdi-account-group-outline</v-icon>
          <div>
            <h3 :id="'care-adoption-title-' + currentLang">{{ content.careCaseStudy.adoptionTitle }}</h3>
            <p v-for="text in content.careCaseStudy.adoptionText" :key="text">{{ text }}</p>
          </div>
        </section>

        <section class="care-apps" :aria-labelledby="'care-apps-title-' + currentLang">
          <div class="care-section-heading">
            <p class="section-label">{{ content.careCaseStudy.appsEyebrow }}</p>
            <h3 :id="'care-apps-title-' + currentLang">{{ content.careCaseStudy.appsTitle }}</h3>
          </div>

          <div class="care-apps__grid">
            <article v-for="app in content.careCaseStudy.apps" :key="app.title" class="care-app-card">
              <div class="care-app-card__heading">
                <v-icon color="#0f8c9b" size="30">{{ app.icon }}</v-icon>
                <div>
                  <h4>{{ app.title }}</h4>
                  <p>{{ app.summary }}</p>
                </div>
              </div>

              <div class="care-app-card__block">
                <h5>{{ content.careCaseStudy.challengeLabel }}</h5>
                <p>{{ app.challenge }}</p>
              </div>
              <div class="care-app-card__block">
                <h5>{{ content.careCaseStudy.solutionLabel }}</h5>
                <p>{{ app.solution }}</p>
              </div>
              <div class="care-app-card__block">
                <h5>{{ content.careCaseStudy.featuresLabel }}</h5>
                <ul>
                  <li v-for="feature in app.features" :key="feature">{{ feature }}</li>
                </ul>
              </div>

              <a
                class="care-app-card__repository"
                :href="app.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ content.careCaseStudy.repositoryLabel }}
                <v-icon size="17">mdi-open-in-new</v-icon>
              </a>

              <div class="work-tags care-app-card__tags" :aria-label="content.careCaseStudy.techLabel">
                <span v-for="tech in app.tech" :key="tech">{{ tech }}</span>
              </div>
            </article>
          </div>
        </section>

        <section class="care-flow-section" :aria-labelledby="'care-flow-title-' + currentLang">
          <div class="care-section-heading">
            <p class="section-label">{{ content.careCaseStudy.flowEyebrow }}</p>
            <h3 :id="'care-flow-title-' + currentLang">{{ content.careCaseStudy.flowTitle }}</h3>
          </div>
          <div class="care-flow">
            <article v-for="(step, index) in content.careCaseStudy.flow" :key="step" class="care-flow__step">
              <span>{{ index + 1 }}</span>
              <p>{{ step }}</p>
            </article>
          </div>
        </section>
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
const careAppsJa = [
  {
    title: '訪看かんたん計算',
    icon: 'mdi-calculator-variant-outline',
    summary: '訪問看護業務で必要な計算を、現場で分かりやすく行えるようにしたWindowsローカルアプリです。',
    challenge: '訪問看護業務で必要な計算を、日々の業務の中でも迷わず簡単に行えるようにする必要がありました。',
    solution: 'インターネット接続を必要としないWindowsアプリとして、現場での操作の分かりやすさを重視して設計・開発しました。実際の利用では「操作が簡単で分かりやすい」と評価され、後続の業務改善に関する相談にもつながりました。',
    features: ['訪問看護業務で必要な計算の支援', '現場で迷いにくいシンプルな操作', 'オフラインで利用できるローカル動作'],
    tech: ['Electron', 'TypeScript', 'Vue 3', 'Composition API', 'Vite', 'Vuetify', 'Vue Router', 'Pinia', 'SQLite', 'better-sqlite3', 'preload / contextBridge / IPC', 'Vitest', 'Vue Test Utils', 'electron-builder', 'NSIS'],
    url: 'https://github.com/Cynthiadayo0309/hokan-kantan',
  },
  {
    title: '訪看かんたん売上管理',
    icon: 'mdi-chart-line',
    summary: '複数施設の訪問看護実績と売上状況を、Windows PC上で入力・確認できるローカルアプリです。',
    challenge: '複数施設・区分別の売上管理や確認を、定期業務の中でより扱いやすく行えるようにする必要がありました。',
    solution: '売上の入力と確認を一つのWindowsデスクトップアプリにまとめ、インターネット接続なしで施設内PCから利用できるようにしました。',
    features: ['複数施設の訪問看護実績の入力', '医療・精神科・介護ごとの売上管理', '月間売上、目標達成率、目標までの残額の確認', '月末売上予測、未入力状況、施設別売上状況の確認'],
    tech: ['Electron 34', 'Vue 3 (SFC)', 'TypeScript 5', 'Vite 6', 'Vue Router', 'Pinia', 'SQLite', 'better-sqlite3', 'Main / Preload / Renderer', 'IPC', 'Vitest', 'Vue Test Utils', 'jsdom', 'ESLint', 'Prettier', 'vue-tsc', 'electron-builder', 'Windows x64', 'NSIS'],
    url: 'https://github.com/Cynthiadayo0309/hokan-easy-sales-manager',
  },
  {
    title: 'メディケア アセスメント管理システム',
    icon: 'mdi-clipboard-text-outline',
    summary: '会社指定のアセスメントシートを、Windows PCで入力・管理・帳票出力できるローカルアプリです。',
    challenge: '紙やExcelを中心に扱われていたアセスメント情報を、施設内で入力・管理・再利用しやすくする必要がありました。',
    solution: '入力から保存、再編集、印刷・PDF出力、過去データ管理までをWindowsアプリにまとめました。データはインストール先と分離して保存し、通常の再インストールで利用者データが消えない設計としています。',
    features: ['アセスメント情報の入力、保存、再編集', '帳票としての印刷とPDF保存', '家族構成図の作成', '過去データの管理', '手動バックアップと復元'],
    tech: ['Vue 3', 'TypeScript (strict)', 'Vue Router', 'Vite', 'Tauri 2', 'Rust', 'SQLite / rusqlite / Tauri SQL', 'html2canvas', 'jsPDF', 'ZIP / SHA-256 backup', 'Vitest', 'Cargo test', 'NSIS'],
    url: 'https://github.com/Cynthiadayo0309/medicare_assessment',
  },
]

const careAppsEn = [
  {
    title: 'Hokan Kantan Calculator',
    icon: 'mdi-calculator-variant-outline',
    summary: 'A local Windows application that makes calculations needed in visiting-nursing work easy to perform and understand.',
    challenge: 'Calculations required in visiting-nursing work needed to be simple to complete accurately during day-to-day operations.',
    solution: 'Designed and developed as an offline Windows application with straightforward operation as a priority. Its ease of use was positively received in practice and led to consultations about further workflow improvements.',
    features: ['Support for calculations required in visiting-nursing work', 'A simple interface designed for quick operation', 'Offline local operation'],
    tech: ['Electron', 'TypeScript', 'Vue 3', 'Composition API', 'Vite', 'Vuetify', 'Vue Router', 'Pinia', 'SQLite', 'better-sqlite3', 'preload / contextBridge / IPC', 'Vitest', 'Vue Test Utils', 'electron-builder', 'NSIS'],
    url: 'https://github.com/Cynthiadayo0309/hokan-kantan',
  },
  {
    title: 'Hokan Kantan Sales Manager',
    icon: 'mdi-chart-line',
    summary: 'A local Windows application for entering and reviewing visiting-nursing results and sales across multiple facilities.',
    challenge: 'Regular sales management and review across facilities and service categories needed to be easier to handle in daily operations.',
    solution: 'Consolidated sales entry and review in one Windows desktop application that can be used on facility PCs without an internet connection.',
    features: ['Entry of visiting-nursing results for multiple facilities', 'Sales management by medical, psychiatric, and long-term care category', 'Monthly sales, target progress, and remaining target review', 'Month-end sales forecast, missing-entry, and facility-by-facility review'],
    tech: ['Electron 34', 'Vue 3 (SFC)', 'TypeScript 5', 'Vite 6', 'Vue Router', 'Pinia', 'SQLite', 'better-sqlite3', 'Main / Preload / Renderer', 'IPC', 'Vitest', 'Vue Test Utils', 'jsdom', 'ESLint', 'Prettier', 'vue-tsc', 'electron-builder', 'Windows x64', 'NSIS'],
    url: 'https://github.com/Cynthiadayo0309/hokan-easy-sales-manager',
  },
  {
    title: 'Medicare Assessment Management System',
    icon: 'mdi-clipboard-text-outline',
    summary: 'A local Windows application for entering, managing, and exporting company-designated assessment sheets.',
    challenge: 'Assessment information previously handled mainly in paper and Excel needed to be easier to enter, manage, and reuse within the facility.',
    solution: 'Consolidated entry, saving, editing, printing, PDF export, and historical record management in a Windows application. Data is stored separately from the installation location so ordinary reinstalls do not remove user data.',
    features: ['Assessment entry, saving, and re-editing', 'Printable reports and PDF export', 'Family relationship diagram creation', 'Historical data management', 'Manual backup and restore'],
    tech: ['Vue 3', 'TypeScript (strict)', 'Vue Router', 'Vite', 'Tauri 2', 'Rust', 'SQLite / rusqlite / Tauri SQL', 'html2canvas', 'jsPDF', 'ZIP / SHA-256 backup', 'Vitest', 'Cargo test', 'NSIS'],
    url: 'https://github.com/Cynthiadayo0309/medicare_assessment',
  },
]

const careCaseStudyJa = {
  eyebrow: 'Case Study',
  title: '訪問看護の現場課題を、ソフトウェアで解決',
  lead: '実際の訪問看護現場で伺った業務上の課題をもとに、必要な機能を整理し、Windowsアプリの要件整理・設計・開発・改善までを個人で行っています。',
  adoptionTitle: '現場導入実績',
  adoptionText: [
    '知り合いの訪問看護施設の施設長公認のもと、開発したアプリを施設内の社員の方々に実際の業務で利用していただいています。',
    '現場から相談された課題をもとに、手作業・計算・管理に関する負担を軽減できるよう、要件整理から設計・開発、フィードバックをもとにした改善までを個人で担当しています。',
  ],
  appsEyebrow: 'Applications',
  appsTitle: '開発したアプリ',
  challengeLabel: '課題',
  solutionLabel: '解決方法',
  featuresLabel: '主な機能',
  repositoryLabel: 'GitHubで見る',
  techLabel: '使用技術',
  flowEyebrow: 'Process',
  flowTitle: '開発から導入まで',
  flow: ['現場の相談', '課題整理', '要件整理', '設計・開発', '現場へ提供', '実際の業務で利用', 'フィードバックをもとに改善'],
  apps: careAppsJa,
}

const careCaseStudyEn = {
  eyebrow: 'Case Study',
  title: 'Solving visiting-nursing workflow challenges with software',
  lead: 'Based on workflow challenges heard directly from a visiting-nursing setting, I independently organize requirements and handle the design, development, and improvement of Windows applications.',
  adoptionTitle: 'In-use at a facility',
  adoptionText: [
    'With the approval of the director of a visiting-nursing facility I know, the applications are currently used by employees in their actual work.',
    'Starting from issues raised by the field, I independently handle requirement organization, design, development, and feedback-driven improvement to help reduce the burden of manual work, calculations, and management.',
  ],
  appsEyebrow: 'Applications',
  appsTitle: 'Applications developed',
  challengeLabel: 'Challenge',
  solutionLabel: 'Approach',
  featuresLabel: 'Key features',
  repositoryLabel: 'View on GitHub',
  techLabel: 'Technologies',
  flowEyebrow: 'Process',
  flowTitle: 'From consultation to adoption',
  flow: ['Field consultation', 'Issue clarification', 'Requirement organization', 'Design and development', 'Provided to the facility', 'Used in day-to-day work', 'Improved from feedback'],
  apps: careAppsEn,
}

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
    currentLang() {
      return this.$route.params.lang === 'en' ? 'en' : 'ja'
    },
    content() {
      if (this.currentLang === 'en') {
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
          careCaseStudy: careCaseStudyEn,
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
        careCaseStudy: careCaseStudyJa,
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
