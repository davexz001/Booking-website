export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'approach'
  | 'portfolio'
  | 'resources'
  | 'contact'
  | 'privacy';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  involves: string[];
  valueToAuthors: string;
  ctaLabel: string;
}

export interface ApproachStage {
  stageNumber: string;
  label: string;
  title: string;
  summary: string;
  points: { heading: string; detail: string }[];
}

export interface PortfolioProject {
  id: string;
  designation: string;
  title: string;
  author: string;
  genre: string;
  coverImage?: string;
  coverImageAlt?: string;
  coverTone: 'navy' | 'sage' | 'plum' | 'ivory';
  overview: string;
  readership: string;
  discoverabilityObservations: string;
  marketingOpportunities: string;
  recommendedApproach: string;
  promotionalChannels: string[];
  strategicNotes: {
    presentationDiagnosis: string;
    metadataAlignment: string;
    ethicalOutreach: string;
  };
}

export interface ResourceArticle {
  id: string;
  number: string;
  category: string;
  title: string;
  summary: string;
  readingTime: string;
  sections: { heading: string; body: string }[];
}

export const SITE_IMAGES = {
  heroDesk: '/src/assets/images/hero_literary_desk_1795479876146.jpg',
  aboutStudy: '/src/assets/images/about_reading_study_1795479875948.jpg',
  coverSaltwater: '/src/assets/images/cover_saltwater_ledger_1795479877251.jpg',
  coverRooted: '/src/assets/images/cover_civic_trees_1795479877551.jpg',
  coverEchoes: '/src/assets/images/cover_winter_stanzas_1795479878300.jpg',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'goodreads-profile',
    number: '01',
    title: 'Goodreads Profile and Book Optimization',
    description:
      'For many readers, Goodreads serves as a primary literary reference before choosing what to read next. Thoughtful Goodreads presentation ensures your author profile, book editions, and descriptive copy reflect the care behind your work.',
    involves: [
      'Auditing book page accuracy, edition details, cover consistency, and series order.',
      'Refining your Goodreads book summary and author biography for tone and clarity.',
      'Advising on author-profile organization, curated book notes, and shelf context.',
    ],
    valueToAuthors:
      'Helps browsing readers immediately understand your book’s genre, literary sensibility, and background while presenting a cohesive, credible author home.',
    ctaLabel: 'Enquire About Goodreads Optimization',
  },
  {
    id: 'goodreads-listopia',
    number: '02',
    title: 'Goodreads Listopia Research',
    description:
      'Reader-curated lists on Goodreads reveal how enthusiasts naturally group comparable books by mood, setting, subject, and literary tradition. Careful research uncovers relevant lists that illuminate genuine discovery pathways—without ever promising guaranteed placements.',
    involves: [
      'Researching active, reader-created lists aligned with your book’s genre and themes.',
      'Studying comparable works to understand how readers classify similar titles.',
      'Delivering a clear research summary of relevant discovery lists and positioning insights.',
    ],
    valueToAuthors:
      'Provides grounded insight into how real readers categorize books like yours and surfaces authentic reader-community intersections without artificial manipulation.',
    ctaLabel: 'Enquire About Listopia Research',
  },
  {
    id: 'amazon-listing',
    number: '03',
    title: 'Amazon Book Listing Optimization',
    description:
      'Your book’s retail presentation is often the decisive moment where reader curiosity meets a reading choice. A well-structured listing communicates genre expectations, narrative stakes, and editorial polish with clarity and restraint.',
    involves: [
      'Book description improvement crafted to reflect your voice and intended readership.',
      'Relevant keyword research and primary/secondary category research.',
      'Metadata evaluation, overall book positioning, and author and series information review.',
    ],
    valueToAuthors:
      'Removes confusing positioning cues, aligns your book with appropriate browse categories, and presents your title clearly to prospective readers across markets.',
    ctaLabel: 'Enquire About Listing Optimization',
  },
  {
    id: 'amazon-seo',
    number: '04',
    title: 'Amazon SEO and Keyword Research',
    description:
      'Readers rarely search using internal publishing terminology; they search using settings, questions, moods, themes, and subject interests. Keyword research examines real search language to inform how your book is positioned and described.',
    involves: [
      'Investigating how readers actually search for titles within your genre or subject area.',
      'Evaluating existing descriptive terms and backend search phrase opportunities.',
      'Translating reader search terminology into natural, authentic book positioning.',
    ],
    valueToAuthors:
      'Grounds your book’s discoverability strategy in observed reader search habits rather than guesswork or generic keyword lists.',
    ctaLabel: 'Enquire About Keyword Research',
  },
  {
    id: 'arc-campaigns',
    number: '05',
    title: 'ARC Campaigns',
    description:
      'Advance Reader Copy outreach works best when built on thoughtful matching and respectful invitations. Rather than chasing high-volume blasts, ethical ARC planning connects pre-release or newly released books with readers genuinely attuned to the genre.',
    involves: [
      'Advance reader copy campaign timeline planning and distribution workflow.',
      'Identifying appropriate reader profiles, genre reviewers, and literary communities.',
      'Drafting transparent, ethical review outreach free from incentives or guaranteed review promises.',
    ],
    valueToAuthors:
      'Supports early reader engagement and honest feedback while protecting your literary credibility and respecting platform guidelines.',
    ctaLabel: 'Enquire About ARC Planning',
  },
  {
    id: 'book-club-outreach',
    number: '06',
    title: 'Book Club Outreach',
    description:
      'Book clubs and literary reading circles foster thoughtful discussion and lasting word-of-mouth recommendations. Effective outreach depends on careful alignment between your book’s themes and each group’s reading focus.',
    involves: [
      'Identifying relevant book clubs, literary circles, and thematic reading groups.',
      'Preparing tailored introduction notes and discussion-ready reading guides.',
      'Outlining polite, non-intrusive outreach approaches for organizers and hosts.',
    ],
    valueToAuthors:
      'Introduces your book to attentive communities of readers who value conversation, depth, and thoughtful peer recommendations.',
    ctaLabel: 'Enquire About Book Club Outreach',
  },
  {
    id: 'author-visibility',
    number: '07',
    title: 'Author Visibility Campaigns',
    description:
      'Appropriate visibility looks very different for a debut poetry volume than it does for historical fiction or narrative nonfiction. This service develops measured promotional recommendations tailored to your genre, audience, and personal goals.',
    involves: [
      'Reviewing your current online author presence and existing promotional materials.',
      'Identifying realistic literary, media, and reader-community visibility opportunities.',
      'Structuring a sustainable promotional plan aligned with your objectives and schedule.',
    ],
    valueToAuthors:
      'Replaces scattered promotional pressure with a calm, focused roadmap suited to the kind of writer you are and the readers you wish to reach.',
    ctaLabel: 'Enquire About Visibility Campaigns',
  },
  {
    id: 'reader-engagement',
    number: '08',
    title: 'Reader Engagement and Audience Development',
    description:
      'Lasting literary readership grows through genuine connection across books rather than a single release week. Audience development explores thoughtful ways for interested readers to stay connected with your writing.',
    involves: [
      'Evaluating reader touchpoints from book back-matter to author website clarity.',
      'Developing sustainable newsletter, correspondence, and reader-connection ideas.',
      'Identifying thematic conversation pathways that honor your literary voice.',
    ],
    valueToAuthors:
      'Encourages meaningful, long-term reader relationships without forcing authors into relentless or inauthentic self-promotion.',
    ctaLabel: 'Enquire About Audience Development',
  },
  {
    id: 'discoverability-metadata',
    number: '09',
    title: 'Book Discoverability and Metadata',
    description:
      'Consistent, accurate book information forms the quiet foundation of international book discovery. Discrepancies across titles, contributor roles, descriptions, or subject codes can fragment visibility across retail and library platforms.',
    involves: [
      'Auditing titles, subtitles, contributor credits, and edition consistency across platforms.',
      'Evaluating subject classifications, descriptive copy, and series linking.',
      'Providing clear recommendations to keep book information unified and accurate.',
    ],
    valueToAuthors:
      'Helps retailers, catalogs, and reader databases interpret and present your book consistently across formats and territories.',
    ctaLabel: 'Enquire About Metadata Review',
  },
];

export const APPROACH_STAGES: ApproachStage[] = [
  {
    stageNumber: '01',
    label: 'Stage One',
    title: 'Understanding the Book',
    summary:
      'Every strategy begins with attentive reading and literary context. Before examining algorithms or outreach lists, the book is understood on its own terms—its voice, narrative structure, subject matter, and publishing circumstances.',
    points: [
      {
        heading: 'Genre & Form',
        detail: 'Clarifying exact literary traditions, genre conventions, or cross-genre sensibilities.',
      },
      {
        heading: 'Storyline & Themes',
        detail: 'Identifying central questions, emotional stakes, settings, and narrative promise.',
      },
      {
        heading: 'Intended Audience',
        detail: 'Defining the reader temperament and interests most likely to appreciate the work.',
      },
      {
        heading: 'Publishing Background',
        detail: 'Considering whether the title is upcoming, newly released, backlist, traditional, or independent.',
      },
    ],
  },
  {
    stageNumber: '02',
    label: 'Stage Two',
    title: 'Discoverability Research',
    summary:
      'Next, we investigate how the book is currently presented across the platforms where readers browse, search, and evaluate new titles. Subtle misalignments in metadata or descriptive framing often limit visibility before promotion even begins.',
    points: [
      {
        heading: 'Platform Presentation',
        detail: 'Reviewing book descriptions, cover signals, and author profiles on Amazon and Goodreads.',
      },
      {
        heading: 'Metadata & Categories',
        detail: 'Auditing subject classifications, edition links, format consistency, and series details.',
      },
      {
        heading: 'Reader Search Behavior',
        detail: 'Studying the everyday terms readers use when searching for comparable themes and stories.',
      },
      {
        heading: 'Comparable Context',
        detail: 'Observing how neighboring titles in the same literary space communicate with readers.',
      },
    ],
  },
  {
    stageNumber: '03',
    label: 'Stage Three',
    title: 'Audience Identification',
    summary:
      'No book is meant for every reader. Pinpointing specific, receptive reading communities ensures promotional outreach remains relevant, grounded, and respectful of both the author and the reader.',
    points: [
      {
        heading: 'Reading Communities',
        detail: 'Locating engaged online and local communities aligned with your genre, region, or subject.',
      },
      {
        heading: 'Book Clubs & Literary Groups',
        detail: 'Researching discussion-led book clubs and societies whose interests match your themes.',
      },
      {
        heading: 'Thoughtful Reviewers',
        detail: 'Identifying readers and literary commentators who consistently engage with similar works.',
      },
      {
        heading: 'International Readerships',
        detail: 'Considering cross-border and cultural reading networks where appropriate to the book.',
      },
    ],
  },
  {
    stageNumber: '04',
    label: 'Stage Four',
    title: 'Strategy Development',
    summary:
      'Findings from the first three stages are synthesized into clear, practical recommendations shaped around the book’s actual needs—never an identical marketing checklist applied across unrelated titles.',
    points: [
      {
        heading: 'Foundational Priorities',
        detail: 'Addressing listing clarity, metadata accuracy, and positioning before external outreach.',
      },
      {
        heading: 'Channel Selection',
        detail: 'Choosing appropriate initiatives such as ARC planning, book club outreach, or Goodreads organization.',
      },
      {
        heading: 'Measured Pacing',
        detail: 'Aligning activities with your publishing calendar, territory availability, and capacity.',
      },
      {
        heading: 'Transparent Reasoning',
        detail: 'Explaining the rationale behind each recommendation with honesty and realism.',
      },
    ],
  },
  {
    stageNumber: '05',
    label: 'Stage Five',
    title: 'Implementation and Evaluation',
    summary:
      'Agreed marketing activities are carried out methodically and reviewed with care—observing how updated presentation and reader outreach are received, and refining next steps thoughtfully.',
    points: [
      {
        heading: 'Structured Rollout',
        detail: 'Coordinating listing refinements, research deliverables, and scheduled outreach workflows.',
      },
      {
        heading: 'Cross-Platform Consistency',
        detail: 'Confirming that editions, biographies, and descriptive updates remain unified.',
      },
      {
        heading: 'Qualitative Observation',
        detail: 'Reviewing reader response, discussion engagement, and presentation clarity over time.',
      },
      {
        heading: 'Sustainable Continuity',
        detail: 'Equipping authors with organized documentation and lasting audience practices.',
      },
    ],
  },
];

/**
 * PORTFOLIO DATA
 * All demonstration analyses are strictly marked:
 * "Independent Sample Analysis – Demonstration Project"
 * To add genuine commissioned client case studies later, append a record
 * with verified, author-approved information.
 */
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'saltwater-ledger',
    designation: 'Independent Sample Analysis – Demonstration Project',
    title: 'The Saltwater Ledger',
    author: 'Illustrative Sample Title',
    genre: 'Literary Fiction',
    coverImage: SITE_IMAGES.coverSaltwater,
    coverImageAlt: 'Midnight navy clothbound hardcover book with brass compass motif on limestone',
    coverTone: 'navy',
    overview:
      'A quiet, multi-generational coastal novel following an archivist returning to a northern island town to catalogue a century of maritime letters and unspoken family history.',
    readership:
      'Readers of atmospheric literary fiction, character-led family sagas, coastal literature, and book clubs drawn to memory, craft, and sense of place.',
    discoverabilityObservations:
      'Books of this register frequently suffer from overly abstract jacket copy that obscures the central human conflict, paired with broad fiction categories that bury contemplative novels beneath fast-paced commercial releases.',
    marketingOpportunities:
      'Restructuring the opening lines of the book description to foreground emotional stakes and setting; aligning Amazon browse categories and Goodreads shelf context with literary family sagas and coastal fiction.',
    recommendedApproach:
      'Refine descriptive positioning and metadata prior to external promotion, then cultivate steady outreach with literary book clubs, regional reading societies, and attentive long-form readers.',
    promotionalChannels: [
      'Amazon book listing positioning & literary category alignment',
      'Goodreads shelf context & Listopia relevance research',
      'Curated literary book club outreach with reading-group notes',
      'Ethical Advance Reader Copy (ARC) placement among literary fiction readers',
    ],
    strategicNotes: {
      presentationDiagnosis:
        'Contemplative literary fiction relies heavily on reader trust in the first paragraph. When a blurb summarizes backstory without conveying atmosphere and emotional tension, browsing readers hesitate.',
      metadataAlignment:
        'Pairing literary fiction classifications with thematic descriptors covering coastal settings, family archives, and intergenerational memory helps recommendation systems surface the book alongside comparable literary works.',
      ethicalOutreach:
        'Focus on smaller, discussion-driven reading groups and thoughtful Goodreads annotators rather than broad promotional blasts that rarely convert for quiet literary novels.',
    },
  },
  {
    id: 'rooted-in-place',
    designation: 'Independent Sample Analysis – Demonstration Project',
    title: 'Rooted in Place',
    author: 'Marcus L. Wright (Illustrative Sample Title)',
    genre: 'Narrative Nonfiction',
    coverImage: SITE_IMAGES.coverRooted,
    coverImageAlt: 'Sage green clothbound hardcover book titled Rooted in Place resting on warm linen',
    coverTone: 'sage',
    overview:
      'An accessible cultural and natural history exploring how civic trees, botanical gardens, and neighborhood landscapes shaped public memory across historic port cities.',
    readership:
      'General nonfiction readers interested in nature writing, urban history, architectural heritage, environmental humanities, and thoughtful gift-edition nonfiction.',
    discoverabilityObservations:
      'Interdisciplinary nonfiction often falls between academic subject classifications and trade reader curiosity. General readers searching for accessible city or nature history seldom search using specialist academic vocabulary.',
    marketingOpportunities:
      'Bridging specialist scholarship and trade appeal through plain-language keyword research, clearer subtitle and blurb framing, and outreach to urban heritage, botanical, and civic reading circles.',
    recommendedApproach:
      'Clarify who the book is written for within the opening listing summary, organize key thematic takeaways clearly, and connect with interdisciplinary nonfiction reading communities.',
    promotionalChannels: [
      'Amazon SEO & plain-language reader search terminology research',
      'Trade-accessible book description restructuring',
      'Civic heritage, gardening & urban-history reading community outreach',
      'Goodreads author profile & topical reading-list research',
    ],
    strategicNotes: {
      presentationDiagnosis:
        'Nonfiction browsers look immediately for clarity on two points: what specific story or question the book explores, and why it speaks to general curiosity beyond academia.',
      metadataAlignment:
        'Aligning BISAC and retail categories across cultural history, nature essays, and urban studies while maintaining consistent edition metadata across hardcover and digital formats.',
      ethicalOutreach:
        'Prioritize civic book groups, independent history newsletters, and botanical societies whose members actively seek thoughtful narrative nonfiction.',
    },
  },
  {
    id: 'echoes-of-the-quiet',
    designation: 'Independent Sample Analysis – Demonstration Project',
    title: 'Echoes of the Quiet',
    author: 'Eliza Harper (Illustrative Sample Title)',
    genre: 'Poetry',
    coverImage: SITE_IMAGES.coverEchoes,
    coverImageAlt: 'Plum clothbound poetry hardcover book titled Echoes of the Quiet on handmade cotton paper',
    coverTone: 'plum',
    overview:
      'A debut collection of lyric poetry arranged in four seasonal movements reflecting on stillness, memory, migration, and the endurance of spoken language across borders.',
    readership:
      'Committed readers of contemporary poetry, literary journal subscribers, university and community writing circles, and international lyric-verse readers.',
    discoverabilityObservations:
      'Poetry collections are often published online with minimal descriptive copy—sometimes only a single sentence—leaving prospective readers without a clear window into the collection’s themes, form, or sensibility.',
    marketingOpportunities:
      'Crafting a dignified editorial overview supported by thematic descriptors, organizing the Goodreads profile around carefully chosen excerpts, and connecting with international poetry reading groups.',
    recommendedApproach:
      'Maintain literary restraint throughout presentation: avoid overstated commercial language, highlight thematic arcs cleanly, and nurture steady visibility within poetry-focused communities.',
    promotionalChannels: [
      'Dignified editorial blurb preparation for contemporary poetry',
      'Goodreads author profile & selected-lines presentation',
      'International poetry circles & literary reading-group outreach',
      'Metadata consistency across print and digital editions',
    ],
    strategicNotes: {
      presentationDiagnosis:
        'Poetry readers value authenticity and craft over promotional superlatives. Including two or three representative lines within an editorial overview often conveys tone far better than generic adjectives.',
      metadataAlignment:
        'Ensuring themes, poetic traditions, and cultural context are accurately indexed without compromising the literary dignity of the collection.',
      ethicalOutreach:
        'Focus on poetry reading groups, independent literary newsletters, and campus or community salons where verse is read and discussed attentively.',
    },
  },
  {
    id: 'meridian-correspondence',
    designation: 'Independent Sample Analysis – Demonstration Project',
    title: 'The Meridian Correspondence',
    author: 'Illustrative Sample Title',
    genre: 'Historical & International Fiction',
    coverTone: 'ivory',
    overview:
      'Set between post-war Vienna and Lisbon, an atmospheric historical mystery following a conservatory music restorer who uncovers coded annotations inside rare nineteenth-century scores.',
    readership:
      'Readers of European historical mysteries, literary suspense, translated-style international fiction, and book clubs seeking rich period settings.',
    discoverabilityObservations:
      'Cross-genre titles blending historical atmosphere with mystery can miss both readerships when period anchors, pacing expectations, and series indicators are left ambiguous on retail and discovery platforms.',
    marketingOpportunities:
      'Establishing clear historical and mystery cues in the opening paragraph, unifying edition metadata across regional marketplaces, and planning structured early-reader outreach.',
    recommendedApproach:
      'Coordinate platform metadata across territories, align Goodreads shelf positioning with historical mystery readers, and organize targeted ARC invitations ahead of international distribution.',
    promotionalChannels: [
      'Cross-genre Amazon category & keyword evaluation',
      'Ethical pre-launch ARC planning for historical mystery readers',
      'International book club & European historical-fiction outreach',
      'Series & edition linking audit across marketplaces',
    ],
    strategicNotes: {
      presentationDiagnosis:
        'Historical mystery readers look immediately for period authenticity and narrative momentum. Grounding time, city, and central dilemma in the first three lines orients the reader immediately.',
      metadataAlignment:
        'Maintaining unified edition linking across hardcover, paperback, ebook, and international storefronts so reader reviews and bibliographic notes remain consolidated.',
      ethicalOutreach:
        'Invite historical-fiction book clubs and dedicated genre reviewers to request advance copies thoughtfully, with zero obligation or pressure.',
    },
  },
];

export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    id: 'amazon-discoverability',
    number: '01',
    category: 'Improving Amazon Book Discoverability',
    title: 'How Book Presentation and Metadata Shape Reader Discovery on Amazon',
    summary:
      'A practical examination of how blurb clarity, category alignment, and consistent edition information help the right readers recognize whether a book belongs on their shelf.',
    readingTime: '4 min read',
    sections: [
      {
        heading: 'Clarity Builds Reader Trust Faster Than Hype',
        body: 'When a reader opens a book listing, they make a quiet assessment within moments: is this book written for someone with my tastes? Overstated promotional superlatives rarely persuade attentive readers. Clear positioning—identifying tone, central stakes or questions, and intended readership—respects the reader and helps genuinely interested buyers recognize the book.',
      },
      {
        heading: 'Aligning Keywords, Categories, and Descriptive Copy',
        body: 'Metadata works best when it reinforces the human-facing book description. Search terminology reflects how readers phrase their curiosity, while categories place the title in a relevant literary neighborhood. When both reflect the actual substance of the work, discoverability becomes coherent and sustainable.',
      },
      {
        heading: 'Keeping Author and Series Presentation Unified',
        body: 'Missing series indicators, inconsistent edition titles, or an incomplete author biography can create quiet friction for returning readers. Periodic audits ensure every edition presents a cohesive literary identity.',
      },
    ],
  },
  {
    id: 'goodreads-for-authors',
    number: '02',
    category: 'Understanding Goodreads for Authors',
    title: 'Presenting Your Author Profile and Editions Thoughtfully on Goodreads',
    summary:
      'How authors can treat Goodreads as an accurate bibliographic home and reader-discovery reference rather than a noisy social stream.',
    readingTime: '4 min read',
    sections: [
      {
        heading: 'Bibliographic Accuracy Comes First',
        body: 'Many readers consult Goodreads before purchasing or borrowing a book. Ensuring cover imagery, page counts, publication details, edition links, and book summaries are accurate signals care and professionalism immediately.',
      },
      {
        heading: 'Learning From Reader Shelves and Listopia',
        body: 'Reader-curated shelves and lists demonstrate how audiences naturally group books by atmosphere, geography, and theme. Studying comparable titles offers honest insight into how readers frame similar work—without chasing artificial list manipulation.',
      },
    ],
  },
  {
    id: 'how-readers-discover',
    number: '03',
    category: 'How Readers Discover New Books',
    title: 'Tracing the Real Pathways Between a Book and Its Next Reader',
    summary:
      'Understanding word-of-mouth ecosystems, search behavior, reading communities, and why single-channel promotion rarely serves literary writing well.',
    readingTime: '5 min read',
    sections: [
      {
        heading: 'Discovery Happens Across Quiet Touchpoints',
        body: 'A reader might hear a title mentioned at a book club, look up its overview on Goodreads, read sample pages on a retail store, and return weeks later to purchase or borrow it. Consistency across each touchpoint matters far more than brief promotional noise.',
      },
      {
        heading: 'Matching Visibility Channels to Genre and Temperament',
        body: 'Approaches suited to fast-moving commercial series rarely fit translated poetry or regional history. Sound marketing begins by asking where a book’s true readers already gather and how they prefer to encounter new titles.',
      },
    ],
  },
  {
    id: 'author-online-presence',
    number: '04',
    category: "Building an Author's Online Presence",
    title: 'Creating a Quiet, Credible Online Home Without Constant Self-Promotion',
    summary:
      'Guidance for writers seeking a dignified, lasting digital presence that reflects their literary voice without relentless daily posting.',
    readingTime: '4 min read',
    sections: [
      {
        heading: 'Lead With Literary Identity, Not Volume',
        body: 'An author presence does not require performing on every social network. A clear personal site, consistent biographies across retail platforms, and an accessible contact point for readers or literary hosts often accomplish more than scattered daily updates.',
      },
      {
        heading: 'Building Continuity Across Books',
        body: 'When an author maintains a clean archive of published works, reading notes, and correspondence options, each new publication naturally strengthens visibility for earlier titles.',
      },
    ],
  },
  {
    id: 'book-metadata',
    number: '05',
    category: 'Understanding Book Metadata',
    title: 'Metadata Explained: The Quiet Architecture Behind Book Visibility',
    summary:
      'An accessible introduction to titles, subtitles, descriptions, subject codes, and edition consistency for independent writers and small presses.',
    readingTime: '4 min read',
    sections: [
      {
        heading: 'What Book Metadata Encompasses',
        body: 'Metadata comprises the structured information describing your book: ISBNs, format details, contributor credits, subject codes, descriptive text, keywords, and territorial availability. Retailers, libraries, and catalogs depend on these fields to file your work accurately.',
      },
      {
        heading: 'Preventing Fragmented Editions',
        body: 'Minor inconsistencies—such as slight spelling variations in a contributor name or mismatched subtitles between print and digital formats—can prevent platforms from grouping editions cleanly.',
      },
    ],
  },
  {
    id: 'finding-book-clubs',
    number: '06',
    category: 'Finding Relevant Book Clubs',
    title: 'Approaching Book Clubs and Literary Reading Groups With Respect',
    summary:
      'How to identify reading circles whose interests genuinely match your book’s themes, and what helps club organizers consider a title.',
    readingTime: '4 min read',
    sections: [
      {
        heading: 'Relevance Before Reach',
        body: 'Generic mass outreach to unrelated clubs rarely produces meaningful engagement. Researching groups whose past selections reflect an interest in your book’s region, themes, or genre respects everyone’s time.',
      },
      {
        heading: 'Supporting Thoughtful Discussion',
        body: 'Providing concise discussion prompts, brief historical or craft context, and clear availability details across print, ebook, and library channels makes it easy for organizers to evaluate a title.',
      },
    ],
  },
  {
    id: 'poetry-literary-fiction',
    number: '07',
    category: 'Marketing Poetry and Literary Fiction',
    title: 'Dignified Visibility Strategies for Poetry and Literary Fiction',
    summary:
      'Why formulaic commercial tactics fail literary writing—and how patient, reader-centered positioning supports enduring work.',
    readingTime: '5 min read',
    sections: [
      {
        heading: 'Honoring the Pace of Literary Readership',
        body: 'Poetry and literary fiction typically build readership steadily through thoughtful reviews, literary journals, translation communities, readings, and peer recommendations rather than sudden viral spikes.',
      },
      {
        heading: 'Articulating What Makes the Work Distinct',
        body: 'Effective positioning describes a book’s sensibility, traditions, and thematic concerns with precision—avoiding clichés while helping attuned readers recognize its voice.',
      },
    ],
  },
  {
    id: 'international-communities',
    number: '08',
    category: 'Reaching International Reading Communities',
    title: 'Thinking Beyond Borders: Book Visibility Across International Markets',
    summary:
      'Practical considerations for authors writing across cultures or connecting with readers across multiple countries and literary traditions.',
    readingTime: '4 min read',
    sections: [
      {
        heading: 'Respecting Regional Reader Expectations',
        body: 'Spelling conventions, genre labels, cover signals, and favored discovery platforms differ across regions. Understanding how readers browse in different countries helps authors present their work naturally across borders.',
      },
      {
        heading: 'Connecting Cross-Cultural Readerships',
        body: 'Many books resonate strongly with international and diaspora reading communities when outreach reflects cultural nuance and authentic literary context.',
      },
    ],
  },
];
