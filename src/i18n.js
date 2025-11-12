// i18n.js - Internationalization configuration
import { useState, useEffect, useCallback } from 'react';

// Translation data
const translations = {
  de: {
    // Navigation
    nav: {
      home: 'Startseite',
      services: 'Dienstleistungen',
      about: 'Über uns',
      contact: 'Kontakt',
      pricing: 'Preise'
    },
    
    // Hero Section
    hero: {
      title: 'Digitale Exzellenz für Ihr Unternehmen',
      subtitle: 'Wir verwandeln Ihre Vision in beeindruckende digitale Erlebnisse',
      "underDevelopment": "Diese Webseite befindet sich derzeit in der Entwicklung. Vielen Dank für Ihre Geduld.",
      description: 'Von modernem Webdesign bis hin zu strategischem Online-Marketing - wir bieten maßgeschneiderte Lösungen, die Ihr Unternehmen zum Erfolg führen.',
      cta: 'Projekt starten',
      learnMore: 'Mehr erfahren'
    },
    
    // Services
    services: {
      title: 'Unsere Dienstleistungen',
      subtitle: 'Professionelle Lösungen für Ihren digitalen Erfolg',
      webDesign: {
        title: 'Web Design',
        shortDesc: 'Hochwertiges Webdesign, das begeistert. Wir erwecken Produkte mit Hilfe neuester Technologien zum Leben!',
        fullDesc: 'Unser Fokus liegt auf beeindruckendem Design, sauberem Code und durchdachter Planung von Struktur und Inhalten. Kreative Köpfe und technische Experten arbeiten Hand in Hand, um individuelle, benutzerfreundliche Websites zu schaffen, die sowohl visuell beeindruckend als auch technisch überzeugend sind.'
      },
      branding: {
        title: 'Branding',
        shortDesc: 'Identität mit starker Wirkung. Wir stärken Ihre Marke nachhaltig durch innovative Ideen und kreative Ansätze.',
        fullDesc: 'Mit klarem Fokus auf einzigartiges Branding und zielgerichtete Marketing-Strategien entwickeln wir Konzepte, die Ihre Marke unverwechselbar machen und im Gedächtnis Ihrer Zielgruppe bleiben.'
      },
      onlineMarketing: {
        title: 'Online Marketing',
        shortDesc: 'Maßgeschneiderte Lösungen für Ihr Wachstum. Im digitalen Zeitalter bestimmt eine starke Online-Präsenz den Erfolg Ihrer Marke.',
        fullDesc: 'Wir setzen auf maßgeschneiderte Online-Marketing-Strategien, um Ihre Zielgruppe genau dort zu erreichen, wo sie aktiv ist. Von Suchmaschinenoptimierung (SEO) bis hin zu bezahlter Werbung (SEA) bis hin zu Content- und E-Mail-Marketing.'
      },
      socialMediaMarketing: {
        title: 'Social Media Marketing',
        shortDesc: 'Maximale Reichweite durch Anzeigen. Wir rücken Ihre Produkte und Dienstleistungen in den Mittelpunkt der Aufmerksamkeit in sozialen Medien.',
        fullDesc: 'Mit präzisem Targeting und klarem Fokus auf Reichweitenmaximierung entwickeln wir Social-Media-Kampagnen, die Ihre Marke sichtbar machen und messbaren Erfolg erzielen.'
      },
      podcastProduction: {
        title: 'Podcast & Audio Produktion',
        shortDesc: 'Erreichen Sie ein breites Publikum: Mit innovativen Konzepten und erstklassiger Technik gestalten wir Ihre Audio-Welt.',
        fullDesc: 'Unser Fokus liegt auf der Produktion fesselnder Podcasts und Audio-Meisterwerke, die Ihre Botschaft präzise vermitteln und bei Ihrem Publikum einen bleibenden Eindruck hinterlassen.'
      },
      photoVideoProduction: {
        title: 'Foto & Video Produktion',
        shortDesc: 'Geschichten zum Leben erwecken. Bilder sagen mehr als tausend Worte - und Videos erzählen ganze Geschichten.',
        fullDesc: 'Mit unserer Foto- und Videoproduktion rücken wir Ihre Marke ins Rampenlicht. Von der ersten Idee bis zur finalen Umsetzung entwickeln wir kreative Konzepte, die Ihre Botschaften visuell stark und authentisch vermitteln.'
      },
      // Process steps
      process: {
        conception: {
          title: 'Konzeption',
          description: 'Jede erfolgreiche Website beginnt mit einer soliden Konzeption. Wir analysieren Ihre Ziele, Zielgruppen und Anforderungen, um eine klare Strategie und Struktur zu entwickeln, die als Grundlage für das gesamte Projekt dient.'
        },
        design: {
          title: 'Design',
          description: 'Im Design rücken wir Ihre Vision ins Rampenlicht. Mit Fokus auf Ästhetik, Benutzerfreundlichkeit und Markenidentität schaffen wir moderne, ansprechende Layouts, die Ihre Zielgruppe begeistern und intuitiv zu bedienen sind.'
        },
        programming: {
          title: 'Programmierung',
          description: 'In der Programmierung wird Design zur Realität. Wir setzen auf sauberen, effizienten Code und neueste Technologien, um eine Website zu entwickeln, die nicht nur gut aussieht, sondern auch zuverlässig und schnell funktioniert.'
        },
        contentManagement: {
          title: 'Content Management',
          description: 'Mit einem flexiblen Content-Management-System geben wir Ihnen die Kontrolle über Ihre Inhalte. Einfach zu bedienen und individuell anpassbar - so bleibt Ihre Website immer aktuell und relevant.'
        },
        testing: {
          title: 'Umfangreiche Tests',
          description: 'Bevor Ihre Website live geht, wird sie auf Herz und Nieren geprüft. Wir überprüfen Funktionalität, Performance und Benutzererfahrung, um sicherzustellen, dass alles reibungslos läuft und Ihre Anforderungen erfüllt werden.'
        },
        launch: {
          title: 'Launch',
          description: 'Der Launch ist der finale Schritt - Ihre Website geht live. Wir begleiten Sie durch den gesamten Prozess und sorgen dafür, dass alles nahtlos abläuft, damit Ihre neue Online-Präsenz sofort glänzen kann.'
        },
        analysis: {
          title: 'Analyse & Strategie',
          description: 'Wir beginnen mit einer gründlichen Analyse Ihrer Marke, Ihres Marktes und Ihrer Zielgruppe. Auf dieser Basis entwickeln wir eine klare Strategie, die das Fundament für starkes und nachhaltiges Branding legt.'
        },
        brandIdentity: {
          title: 'Markenidentität',
          description: 'In dieser Phase entwickeln wir die Kernelemente Ihrer Markenidentität - von Mission und Vision bis hin zu Werten, Positionierung und Tonalität. So entsteht eine authentische Grundlage, die Ihre Marke einzigartig macht.'
        },
        designDevelopment: {
          title: 'Design-Entwicklung',
          description: 'Unser Design-Team setzt Ihre Markenidentität visuell um. Vom Logo über Farbschemata bis hin zu Typografie und Bildsprache: Wir schaffen ein einheitliches Erscheinungsbild, das Ihre Marke unverwechselbar macht.'
        },
        implementation: {
          title: 'Umsetzung & Rollout',
          description: 'Wir erwecken Ihre Marke zum Leben. Ob Website, Social Media, Print oder andere Kanäle - wir setzen die entwickelten Design-Elemente konsequent um und sorgen für ein konsistentes Erscheinungsbild auf allen Ebenen.'
        },
        evaluation: {
          title: 'Bewertung & Optimierung',
          description: 'Nach dem Rollout ist unsere Arbeit nicht getan. Wir analysieren die Performance Ihres neuen Brandings und justieren bei Bedarf nach, um sicherzustellen, dass Ihre Marke optimal auf Ihre Ziele ausgerichtet bleibt.'
        },
        goalDefinition: {
          title: 'Analyse & Zieldefinition',
          description: 'Es beginnt mit einer umfassenden Analyse Ihrer aktuellen Online-Präsenz, Ihrer Zielgruppe und der Konkurrenz. Gemeinsam definieren wir klare Ziele und legen das Fundament für eine maßgeschneiderte Online-Marketing-Strategie.'
        },
        strategicPlanning: {
          title: 'Strategische Planung',
          description: 'Mit tiefem Verständnis für Ihre Ziele entwickeln wir eine detaillierte Strategie. Ob SEO, SEA, Content-Marketing oder Social Media - wir wählen die richtigen Kanäle und Maßnahmen, um Ihre Zielgruppe effektiv zu erreichen.'
        },
        contentCreation: {
          title: 'Content-Erstellung',
          description: 'Content ist König: Wir entwickeln ansprechende Inhalte, die Ihre Botschaft klar und kreativ vermitteln. Von Texten und Grafiken bis hin zu Videos - unser Team sorgt dafür, dass Ihre Inhalte überzeugen und begeistern.'
        },
        campaignImplementation: {
          title: 'Kampagnen-Umsetzung',
          description: 'Wir setzen die geplanten Maßnahmen professionell um und starten Ihre Kampagnen auf den richtigen Kanälen. Mit Blick fürs Detail und hohen Qualitätsstandards sorgen wir für reibungslose Abläufe und maximale Effizienz.'
        },
        monitoring: {
          title: 'Monitoring & Kampagnen-Optimierung',
          description: 'Erfolg ist kein Zufall. Wir überwachen die Performance Ihrer Kampagnen in Echtzeit und justieren laufend nach. Mit datengetriebenen Optimierungen sorgen wir dafür, dass Ihre Maßnahmen immer besser werden.'
        },
        reporting: {
          title: 'Reporting & Weiterentwicklung',
          description: 'Transparenz ist uns wichtig: Mit regelmäßigen Reports halten wir Sie über den Erfolg Ihrer Kampagnen auf dem Laufenden. Gemeinsam analysieren wir die Ergebnisse und leiten die nächsten Schritte ab.'
        },
        goalSetting: {
          title: 'Analyse & Zielsetzung',
          description: 'Wir beginnen mit einer umfassenden Analyse Ihrer Marke, Zielgruppe und Konkurrenten. Gemeinsam definieren wir klare Ziele für Ihre Social-Media-Präsenz, um eine Strategie zu entwickeln, die präzise auf Ihre Bedürfnisse zugeschnitten ist.'
        },
        strategyDevelopment: {
          title: 'Strategie-Entwicklung',
          description: 'Basierend auf der Analyse erstellen wir eine maßgeschneiderte Social-Media-Strategie. Wir bestimmen, welche Plattformen, Inhalte und Werbeformate am besten zu Ihren Zielen passen.'
        },
        campaignManagement: {
          title: 'Kampagnen-Management',
          description: 'Wir setzen Ihre Kampagnen professionell um und überwachen sie kontinuierlich. Durch gezieltes Targeting und optimierte Werbeformate sorgen wir dafür, dass Ihre Botschaften die richtigen Menschen zur richtigen Zeit erreichen.'
        },
        optimization: {
          title: 'Monitoring & Optimierung',
          description: 'Erfolg ist messbar: Wir verfolgen die Performance Ihrer Kampagnen in Echtzeit und nehmen laufend Anpassungen vor, um die besten Ergebnisse zu erzielen. Mit datengetriebenen Optimierungen steigern wir Reichweite, Engagement und Conversion-Raten.'
        },
        feedback: {
          title: 'Reporting & Feedback',
          description: 'Wir halten Sie regelmäßig auf dem Laufenden. Mit transparenten Reports und klaren Analysen zeigen wir, wie Ihre Kampagnen performen. Gemeinsam besprechen wir die Ergebnisse und leiten daraus die nächsten Schritte ab.'
        },
        conceptionPlanning: {
          title: 'Konzeption & Planung',
          description: 'Jede erfolgreiche Produktion beginnt mit einer starken Idee. Gemeinsam entwickeln wir das Konzept, das zu Ihrer Marke und Zielgruppe passt, definieren die Struktur und planen Inhalte, die Ihre Hörer fesseln.'
        },
        editorialSupport: {
          title: 'Redaktionelle Betreuung',
          description: 'Mit durchdachter redaktioneller Betreuung sorgen wir dafür, dass Ihre Botschaften klar und überzeugend vermittelt werden. Von der Themenrecherche bis zur Skripterstellung - wir begleiten Sie bei jedem Schritt.'
        },
        production: {
          title: 'Produktion',
          description: 'In unserem Studio setzen wir Ihre Inhalte in höchster Qualität um. Mit professioneller Ausrüstung und einem erfahrenen Team sorgen wir dafür, dass Ihr Podcast akustisch überzeugt und technisch auf höchstem Niveau produziert wird.'
        },
        postProduction: {
          title: 'Post-Produktion',
          description: 'In der Post-Produktion beginnt die Feinarbeit: Wir schneiden, bearbeiten und optimieren Ihre Aufnahmen, fügen Soundeffekte und Musik hinzu und sorgen für einen klaren, professionellen Klang.'
        },
        hosting: {
          title: 'Podcast-Hosting',
          description: 'Damit Ihr Podcast gehört wird, braucht er das richtige Hosting. Wir kümmern uns um die Auswahl der richtigen Plattform und sorgen für eine reibungslose Veröffentlichung.'
        },
        marketing: {
          title: 'Podcast-Marketing',
          description: 'Ein großartiger Podcast verdient es, entdeckt zu werden. Mit gezieltem Podcast-Marketing steigern wir Ihre Reichweite, optimieren Ihre Sichtbarkeit und sorgen dafür, dass Ihre Inhalte genau die richtige Zielgruppe erreichen.'
        },
        conceptPlanning: {
          title: 'Konzept & Planung',
          description: 'Der erste Schritt zu großartigen Bildern und Videos ist eine klare Vision. Gemeinsam entwickeln wir kreative Konzepte und detaillierte Pläne, die präzise auf Ihre Marke und Zielgruppe zugeschnitten sind.'
        },
        editorialContentSupport: {
          title: 'Redaktionelle & inhaltliche Betreuung',
          description: 'Wir begleiten Sie durch den gesamten kreativen Prozess - von der Story-Entwicklung bis zum Drehbuch. Unsere redaktionelle Betreuung sorgt dafür, dass jedes Detail stimmt und Ihre Inhalte professionell umgesetzt werden.'
        },
        productionPhase: {
          title: 'Produktionsphase',
          description: 'In der Produktionsphase setzen wir Ihre Ideen in die Praxis um. Mit einem Team aus erfahrenen Fotografen, Kameraleuten und Regisseuren sowie neuester Technik sorgen wir dafür, dass Ihre Aufnahmen visuell beeindruckend und technisch perfekt werden.'
        },
        postProductionEditing: {
          title: 'Post-Produktion & Bearbeitung',
          description: 'Nach der Aufnahme kommt die Feinarbeit: Wir schneiden, bearbeiten und optimieren Ihr Material, fügen Spezialeffekte, Musik und Grafiken hinzu und sorgen dafür, dass das Ergebnis nicht nur überzeugt, sondern begeistert.'
        },
        publication: {
          title: 'Verwendung & Veröffentlichung',
          description: 'Wir unterstützen Sie dabei, Ihre Fotos und Videos optimal zu nutzen. Ob auf Ihrer Website, in sozialen Medien oder in Werbekampagnen - wir sorgen dafür, dass Ihre Inhalte genau dort ankommen, wo sie die größte Wirkung entfalten.'
        }
      }
    },
    
    // About Section
    about: {
      title: 'Über uns',
      subtitle: 'Ihr Partner für digitale Transformation',
      description: 'Wir sind ein Team aus kreativen Köpfen und technischen Experten, die sich der digitalen Exzellenz verschrieben haben. Mit jahrelanger Erfahrung und einem tiefen Verständnis für moderne Technologien helfen wir Unternehmen dabei, ihre digitale Präsenz zu stärken und nachhaltigen Erfolg zu erzielen.',
      stats: {
        projects: 'Projekte abgeschlossen',
        clients: 'Zufriedene Kunden',
        experience: 'Jahre Erfahrung',
        awards: 'Auszeichnungen'
      },
      vision: {
        title: 'Unsere Vision',
        description: 'Immer darauf bedacht zu sein, Kunden mit Respekt, Pünktlichkeit, Glaubwürdigkeit und Transparenz zu bedienen. Das Unternehmen zielt auch darauf ab, Kunden nützliche Beratung und Informationen sowie moderne und hochwertige Dienstleistungen zu den niedrigstmöglichen Kosten zu bieten.'
      },
      mission: {
        title: 'Unsere Mission',
        description: 'Dazu beizutragen, mit globalen Trends Schritt zu halten und ein strahlender Stern der Exzellenz zu sein. Die wichtigste Mission ist es, das Werbebewusstsein und die Kultur durch innovative Ideen und moderne, attraktive Designs zu fördern.'
      },
      goals: {
        title: 'Unsere Ziele',
        description: 'Immer die besten Dienstleistungen zu einem angemessenen Preis für alle Kunden zu bieten und hochwertige Werbedienstleistungen auf einer effektiven praktischen und technischen Grundlage anzubieten.'
      },
      team: {
        title: 'Unser Team',
        description: 'Das Team ist eine Elitegruppe junger Menschen mit modernen und fortgeschrittenen technischen und wissenschaftlichen Spezialisierungen. Sie haben vielfältige Erfahrungen und sind dem Wissenserwerb und dem Lernen neuer Dinge gewidmet.'
      },
      values: {
        title: 'Unsere Unternehmenswerte',
        respect: {
          title: 'Respekt',
          description: 'Wir behandeln alle unsere Kunden und Partner mit größtem Respekt und Professionalität.'
        },
        credibility: {
          title: 'Glaubwürdigkeit',
          description: 'Transparenz und Ehrlichkeit sind das Fundament aller unserer Geschäftsbeziehungen.'
        },
        innovation: {
          title: 'Innovation',
          description: 'Wir suchen ständig nach neuen und kreativen Lösungen, um den sich entwickelnden Bedürfnissen unserer Kunden gerecht zu werden.'
        },
        excellence: {
          title: 'Exzellenz',
          description: 'Wir streben nach höchster Qualität in allem, was wir tun, vom Design bis zum Kundenservice.'
        },
        achievement: {
          title: 'Leistung',
          description: 'Wir sind bestrebt, unseren Kunden dabei zu helfen, ihre Ziele zu erreichen und ihre Erwartungen zu übertreffen.'
        }
      }
    },
    
    // Contact Section
    contact: {
      title: 'Kontakt',
      subtitle: 'Lassen Sie uns Ihr nächstes Projekt besprechen',
      manager: {
        name: 'Ing. Tarek Al Raie',
        title: 'Geschäftsführer / General Manager / Geschäftsführer (Managing Director)'
      },
      form: {
        title: 'Nachricht senden',
        name: 'Name',
        firstName: 'Vorname',
        lastName: 'Nachname',
        email: 'E-Mail',
        subject: 'Betreff',
        message: 'Nachricht',
        send: 'Nachricht senden',
        firstNamePlaceholder: 'Max',
        lastNamePlaceholder: 'Mustermann',
        emailPlaceholder: 'max@beispiel.de',
        messagePlaceholder: 'Erzählen Sie uns von Ihrem Projekt oder Ihrer Anfrage...',
        subjects: {
          advertising: 'Werbeanfrage',
          partnership: 'Partnerschaftsmöglichkeit',
          general: 'Allgemeine Frage'
        }
      },
      info: {
        address: 'Adresse',
        phone: 'Telefon',
        email: 'E-Mail',
        company: 'Unternehmen'
      }
    },
    
    // Pricing Section
    pricing: {
      title: 'Preise',
      subtitle: 'Transparente Preisgestaltung für Ihre Projekte',
      frontCover: 'Titelseite',
      backCover: 'Rückseite',
      insideFrontCover: 'Innenseite vorne',
      insideBackCover: 'Innenseite hinten',
      fullPage: 'Ganze Seite',
      halfPage: 'Halbe Seite',
      quarterPage: 'Viertel Seite',
      businessCard: 'Visitenkartengröße',
      advertising: {
        title: 'Werbepreise'
      },
      cta: {
        title: 'Bereit zu werben?',
        description: 'Kontaktieren Sie uns noch heute, um Ihre Werbebedürfnisse zu besprechen, ein individuelles Angebot für Jahresabonnements zu erhalten oder Ihren Platz in unserer nächsten Ausgabe zu sichern.',
        button: 'Jetzt kontaktieren'
      }
    },
    
    // Magazine Section
    magazine: {
      title: 'Four Seasons Magazin',
      description: 'Ein einzigartiges Projekt, das darauf ausgelegt ist, dem deutschen Markt, den Bedürfnissen der in Deutschland lebenden arabischen Gemeinden sowie Touristen und Besuchern aus dem Nahen Osten zu dienen.',
      overview: {
        title: 'Magazin-Übersicht',
        description: 'Four Seasons Magazine - Deutschland ist eine umfassende Publikation, die Kulturen und Gemeinschaften verbindet. Unser Magazin bietet hochwertige Inhalte zu Lifestyle, Business, Kultur und Gemeinschaftsnachrichten.'
      },
      audience: {
        title: 'Zielgruppe',
        description: 'Unser Magazin dient einer vielfältigen und engagierten Leserschaft in ganz Deutschland und konzentriert sich auf qualitativ hochwertige Inhalte, die bei unserem multikulturellen Publikum Anklang finden.',
        professionals: 'Deutsche Geschäftsleute',
        communities: 'Arabische Gemeinden in Deutschland',
        tourists: 'Internationale Touristen und Besucher',
        enthusiasts: 'Kulturbegeisterte und Lifestyle-Leser'
      },
      features: {
        quarterly: 'Vierteljährlicher Veröffentlichungsplan',
        formats: 'Hochwertige Print- und Digitalformate',
        multilingual: 'Mehrsprachige Inhalte (Deutsch, Arabisch, Englisch)',
        distribution: 'Breites Vertriebsnetz in ganz Deutschland'
      },
      cta: {
        title: 'Bereit zu werben?',
        description: 'Werden Sie Teil unserer Werbegemeinschaft und erreichen Sie Ihre Zielgruppe über unsere Premium-Publikationsplattform.'
      }
    },
    
    // Common
    common: {
      learnMore: 'Mehr erfahren',
      getStarted: 'Jetzt starten',
      viewDetails: 'Details anzeigen',
      backToHome: 'Zurück zur Startseite',
      loading: 'Wird geladen...'
    },
    
    // Footer
    footer: {
      description: 'Ein einzigartiges Projekt, das darauf ausgelegt ist, dem deutschen Markt, den Bedürfnissen der in Deutschland lebenden arabischen Gemeinden sowie Touristen und Besuchern aus dem Nahen Osten zu dienen.',
      quickLinks: 'Schnelllinks',
      magazineDetails: 'Magazin-Details',
      copyright: '© 2025 Four Seasons Magazine Deutschland. Alle Rechte vorbehalten.'
    }
  },
  
  en: {
    // Navigation
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      pricing: 'Pricing'
    },
    
    // Hero Section
    hero: {
      title: 'Digital Excellence for Your Business',
      subtitle: 'We transform your vision into stunning digital experiences',
      "underDevelopment": "This website is currently under development. Thank you for your patience.",
      description: 'From modern web design to strategic online marketing - we offer tailored solutions that lead your business to success.',
      cta: 'Start Project',
      learnMore: 'Learn More'
    },
    
    // Services
    services: {
      title: 'Our Services',
      subtitle: 'Professional solutions for your digital success',
      webDesign: {
        title: 'Web Design',
        shortDesc: 'High-end web design that inspires. We bring products to life with the help of the latest technologies!',
        fullDesc: 'Our focus is on impressive design, clean code and thorough planning of the structure and content. Creative minds and technical experts work hand in hand to create individual, user-friendly websites that are both visually impressive and technically convincing.'
      },
      branding: {
        title: 'Branding',
        shortDesc: 'Identity with a strong impact. We strengthen your brand sustainably through innovative ideas and creative approaches.',
        fullDesc: 'With a clear focus on unique branding and targeted marketing strategies, we develop concepts that make your brand distinctive and remain in the memory of your target group.'
      },
      onlineMarketing: {
        title: 'Online Marketing',
        shortDesc: 'Tailor-made solutions for your growth. In the digital age, a strong online presence determines the success of your brand.',
        fullDesc: 'We rely on tailor-made online marketing strategies to reach your target group exactly where they are active. From search engine optimization (SEO) to paid advertising (SEA) to content and email marketing.'
      },
      socialMediaMarketing: {
        title: 'Social Media Marketing',
        shortDesc: 'Maximum reach through ads. We put your products and services at the center of attention on social media.',
        fullDesc: 'With precise targeting and a clear focus on reach maximization, we develop social media campaigns that make your brand visible and achieve measurable success.'
      },
      podcastProduction: {
        title: 'Podcast & Audio Production',
        shortDesc: 'Reach a broad audience: With innovative concepts and first-class technology, we design your audio world.',
        fullDesc: 'Our focus is on producing captivating podcasts and audio masterpieces that convey your message precisely and make a lasting impression on your audience.'
      },
      photoVideoProduction: {
        title: 'Photo & Video Production',
        shortDesc: 'Bringing stories to life. Pictures say more than a thousand words - and videos tell whole stories.',
        fullDesc: 'With our photo and video production, we put your brand in the spotlight. From the first idea to the final implementation, we develop creative concepts that convey your messages visually in a strong and authentic way.'
      },
      // Process steps
      process: {
        conception: {
          title: 'Conception',
          description: 'Every successful website starts with a solid conception. We analyse your goals, target groups and requirements to develop a clear strategy and structure that serves as the foundation for the entire project.'
        },
        design: {
          title: 'Design',
          description: 'In design, we put your vision into the spotlight. With a focus on aesthetics, user-friendliness and brand identity, we create modern, appealing layouts that inspire your target group and are intuitive to use.'
        },
        programming: {
          title: 'Programming',
          description: 'In programming, design becomes reality. We rely on clean, efficient code and the latest technologies to develop a website that not only looks good but also works reliably and quickly.'
        },
        contentManagement: {
          title: 'Content Management',
          description: 'With a flexible content management system, we give you control over your content. Easy to use and individually customizable - so your website always stays up to date and relevant.'
        },
        testing: {
          title: 'Extensive Testing',
          description: 'Before your website goes live, it is put through its paces. We check functionality, performance and user experience to ensure that everything runs smoothly, and your requirements are met.'
        },
        launch: {
          title: 'Launch',
          description: 'The launch is the final step - your website goes live. We will guide you through the entire process and ensure that everything runs seamlessly so that your new online presence can shine right away.'
        },
        analysis: {
          title: 'Analysis & Strategy',
          description: 'We start with a thorough analysis of your brand, your market and your target group. On this basis, we develop a clear strategy that lays the foundation for strong and sustainable branding.'
        },
        brandIdentity: {
          title: 'Brand Identity',
          description: 'In this phase, we develop the core elements of your brand identity - from mission and vision to values, positioning and tone. This creates an authentic foundation that makes your brand unique.'
        },
        designDevelopment: {
          title: 'Design Development',
          description: 'Our design team visually implements your brand identity. From the logo to colour schemes to typography and imagery: We create a uniform appearance that makes your brand unmistakable.'
        },
        implementation: {
          title: 'Implementation & Rollout',
          description: 'We bring your brand to life. Whether website, social media, print or other channels - we consistently implement the developed design elements and ensure a consistent appearance at all levels.'
        },
        evaluation: {
          title: 'Evaluation & Optimization',
          description: 'Our job is not done after the rollout. We analyse the performance of your new branding and adjust if necessary to ensure that your brand remains optimally aligned with your goals.'
        },
        goalDefinition: {
          title: 'Analysis & Goal Definition',
          description: 'It starts with a comprehensive analysis of your current online presence, your target group and the competition. Together we define clear goals and lay the foundation for a tailor-made online marketing strategy that will move your brand forward.'
        },
        strategicPlanning: {
          title: 'Strategic Planning',
          description: 'With a deep understanding of your goals, we develop a detailed strategy. Whether SEO, SEA, content marketing or social media - we choose the right channels and measures to effectively reach your target group and strengthen your brand.'
        },
        contentCreation: {
          title: 'Content Creation',
          description: 'Content is king: We develop appealing content that conveys your message clearly and creatively. From texts and graphics to videos- our team ensures that your content is convincing and inspires your target group.'
        },
        campaignImplementation: {
          title: 'Campaign Implementation',
          description: 'We implement the planned measures professionally and start your campaigns on the right channels. With an eye for detail and high-quality standards, we ensure a smooth process and maximum efficiency.'
        },
        monitoring: {
          title: 'Monitoring & Campaign Optimization',
          description: 'Success is no coincidence. We monitor the performance of your campaigns in real time and adjust on an ongoing basis. With data-driven optimizations, we ensure that your measures perform better and better and achieve your goals.'
        },
        reporting: {
          title: 'Reporting & Further Development',
          description: 'Transparency is important to us: We keep you up to date on the success of your campaigns with regular reports. Together we analyse the results and derive the next steps to continuously improve your online marketing.'
        },
        goalSetting: {
          title: 'Analysis & Goal Setting',
          description: 'We start with a comprehensive analysis of your brand, target group and competitors. Together, we define clear goals for your social media presence to develop a strategy that is precisely tailored to your needs and market opportunities.'
        },
        strategyDevelopment: {
          title: 'Strategy Development',
          description: 'Based on the analysis, we create a tailor-made social media strategy. We determine which platforms, content and advertising formats best suit your goals and plan an editorial calendar for consistent communication.'
        },
        campaignManagement: {
          title: 'Campaign Management',
          description: 'We implement your campaigns professionally and monitor them continuously. Through targeted targeting and optimized ad formats, we ensure that your messages reach the right people at the right time.'
        },
        optimization: {
          title: 'Monitoring & Optimization',
          description: 'Success is measurable: We track the performance of your campaigns in real time and make ongoing adjustments to achieve the best results. With data-driven optimizations, we increase reach, engagement and conversion rates.'
        },
        feedback: {
          title: 'Reporting & Feedback',
          description: 'We keep you regularly updated. With transparent reports and clear analyses, we show how your campaigns are performing. We discuss the results together and use them to derive the next steps for continuous improvement.'
        },
        conceptionPlanning: {
          title: 'Conception & Planning',
          description: 'Every successful production starts with a strong idea. Together, we develop the concept that suits your brand and target group, define the structure and plan content that captivates your listeners and keeps them loyal in the long term.'
        },
        editorialSupport: {
          title: 'Editorial Support',
          description: 'With well-thought-out editorial support, we ensure that your messages are conveyed clearly and convincingly. From topic research to script creation to preparing interviews - we accompany you every step of the way.'
        },
        production: {
          title: 'Production',
          description: 'In our studio, we implement your content in the highest quality. With professional equipment and an experienced team, we ensure that your podcast is acoustically convincing and technically produced at the highest level.'
        },
        postProduction: {
          title: 'Post-Production',
          description: 'The fine work begins in post-production: We cut, edit and optimize your recordings, add sound effects and music and ensure a clear, professional sound that will delight your audience.'
        },
        hosting: {
          title: 'Podcast Hosting',
          description: 'For your podcast to be heard, it needs the right hosting. We take care of selecting the right platform and ensure a smooth publication so that your episodes are available anytime, anywhere.'
        },
        marketing: {
          title: 'Podcast Marketing',
          description: 'A great podcast deserves to be discovered. With targeted podcast marketing, we increase your reach, optimize your visibility and ensure that your content reaches exactly the right target group.'
        },
        conceptPlanning: {
          title: 'Concept & Planning',
          description: 'The first step to great images and videos is a clear vision. Together we develop creative concepts and detailed plans that are tailored precisely to your brand and target group to convey your messages in the best possible way.'
        },
        editorialContentSupport: {
          title: 'Editorial & Content Support',
          description: 'We accompany you through the entire creative process - from story development to script writing. Our editorial support ensures that every detail is correct and that your content is implemented professionally and purposefully.'
        },
        productionPhase: {
          title: 'Production Phase',
          description: 'In the production phase, we put your ideas into practice. With a team of experienced photographers, cameramen and directors as well as the latest technology, we ensure that your recordings are both visually impressive and technically perfect.'
        },
        postProductionEditing: {
          title: 'Post-Production & Editing',
          description: 'After the recording comes the fine work: We cut, edit and optimize your material, add special effects, music and graphics and ensure that the result is not only convincing, but also inspiring.'
        },
        publication: {
          title: 'Use & Publication',
          description: 'We support you in making the best use of your photos and videos. Whether on your website, in social media or in advertising campaigns - we ensure that your content reaches exactly where it has the greatest impact.'
        }
      }
    },
    
    // About Section
    about: {
      title: 'About Us',
      subtitle: 'Your partner for digital transformation',
      description: 'We are a team of creative minds and technical experts dedicated to digital excellence. With years of experience and a deep understanding of modern technologies, we help companies strengthen their digital presence and achieve sustainable success.',
      stats: {
        projects: 'Projects Completed',
        clients: 'Happy Clients',
        experience: 'Years Experience',
        awards: 'Awards Won'
      },
      vision: {
        title: 'Our Vision',
        description: 'To always be dedicated to serving customers with respect, timeliness, credibility, and transparency. The company also aims to provide customers with useful advice and information, as well as modern and high-quality services at the lowest possible cost, while avoiding imitation to achieve a position of permanent excellence and innovation.'
      },
      mission: {
        title: 'Our Mission',
        description: 'To contribute to keeping pace with global trends and to be a shining star of excellence. The most important mission is to raise advertising awareness and culture through innovative ideas and modern, attractive designs that are far from being imitative.'
      },
      goals: {
        title: 'Our Goals',
        description: 'To always provide the best services at a suitable price for all customers, and to offer high-quality advertising services based on an effective practical and technical foundation. This is achieved by having a specialized and advanced team capable of using modern technologies to meet customer needs in the most sophisticated and contemporary way, avoiding randomness and imitation.'
      },
      team: {
        title: 'Our Team',
        description: 'The team is an elite group of young people with modern and advanced technical and scientific specialties. They have diverse experiences and are dedicated to gaining knowledge and learning what\'s new. They are flexible in their work, which allows them to be creative and offer new ideas that suit the current era to serve their customers.'
      },
      values: {
        title: 'Our Company Values',
        respect: {
          title: 'Respect',
          description: 'We treat all our clients and partners with the utmost respect and professionalism.'
        },
        credibility: {
          title: 'Credibility',
          description: 'Transparency and honesty are the foundation of all our business relationships.'
        },
        innovation: {
          title: 'Innovation',
          description: 'We constantly seek new and creative solutions to meet our clients\' evolving needs.'
        },
        excellence: {
          title: 'Excellence',
          description: 'We strive for the highest quality in everything we do, from design to customer service.'
        },
        achievement: {
          title: 'Achievement',
          description: 'We are committed to helping our clients achieve their goals and exceed their expectations.'
        }
      }
    },
    
    // Contact Section
    contact: {
      title: 'Contact',
      subtitle: 'Let\'s discuss your next project',
      manager: {
        name: 'Eng. Tarek Al Raie',
        title: 'General Director / General Manager / Geschäftsführer (Managing Director)'
      },
      form: {
        title: 'Send a Message',
        name: 'Name',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        firstNamePlaceholder: 'John',
        lastNamePlaceholder: 'Doe',
        emailPlaceholder: 'john@example.com',
        messagePlaceholder: 'Tell us about your project or inquiry...',
        subjects: {
          advertising: 'Advertising Inquiry',
          partnership: 'Partnership Opportunity',
          general: 'General Question'
        }
      },
      info: {
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        company: 'Company'
      }
    },
    
    // Pricing Section
    pricing: {
      title: 'Pricing',
      subtitle: 'Transparent pricing for your projects',
      frontCover: 'Front Cover',
      backCover: 'Back Cover',
      insideFrontCover: 'Inside Front Cover',
      insideBackCover: 'Inside Back Cover',
      fullPage: 'Full Page',
      halfPage: 'Half Page',
      quarterPage: 'Quarter Page',
      businessCard: 'Business Card Size',
      advertising: {
        title: 'Advertising Rates'
      },
      cta: {
        title: 'Ready to Advertise?',
        description: 'Contact us today to discuss your advertising needs, get a custom quote for annual subscriptions, or secure your spot in our next issue.',
        button: 'Contact Us Now'
      }
    },
    
    // Magazine Section
    magazine: {
      title: 'Four Seasons Magazine',
      description: 'A unique project designed to serve the German market, the needs of Arab communities living in Germany, as well as tourists and visitors from the Middle East.',
      overview: {
        title: 'Magazine Overview',
        description: 'Four Seasons Magazine - Deutschland is a comprehensive publication that bridges cultures and communities. Our magazine features high-quality content covering lifestyle, business, culture, and community news relevant to our diverse readership.'
      },
      audience: {
        title: 'Target Audience',
        description: 'Our magazine serves a diverse and engaged readership across Germany, focusing on quality content that resonates with our multicultural audience.',
        professionals: 'German business professionals',
        communities: 'Arab communities in Germany',
        tourists: 'International tourists and visitors',
        enthusiasts: 'Cultural enthusiasts and lifestyle readers'
      },
      features: {
        quarterly: 'Quarterly publication schedule',
        formats: 'High-quality print and digital formats',
        multilingual: 'Multilingual content (German, Arabic, English)',
        distribution: 'Wide distribution network across Germany'
      },
      cta: {
        title: 'Ready to Advertise?',
        description: 'Join our community of advertisers and reach your target audience through our premium publication platform.'
      }
    },
    
    // Common
    common: {
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      viewDetails: 'View Details',
      backToHome: 'Back to Home',
      loading: 'Loading...'
    },
    
    // Footer
    footer: {
      description: 'A unique project designed to serve the German market, the needs of Arab communities living in Germany, as well as tourists and visitors from the Middle East.',
      quickLinks: 'Quick Links',
      magazineDetails: 'Magazine Details',
      copyright: '© 2025 Four Seasons Magazine Deutschland. All rights reserved.'
    }
  },
  
  
};

// Get initial language from localStorage, URL, or browser preference
const getInitialLanguage = () => {
  // First check localStorage
  const savedLanguage = localStorage.getItem('fourseasons-language');
  if (savedLanguage && translations[savedLanguage]) {
    return savedLanguage;
  }
  
  // Then check URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  if (langParam && translations[langParam]) {
    return langParam;
  }
  
  // Then check browser language
  const browserLang = navigator.language.split('-')[0];
  if (translations[browserLang]) {
    return browserLang;
  }
  
  // Default to German
  return 'de';
};

// Language detection and management with stable references
export const useI18n = () => {
  const [currentLanguage, setCurrentLanguage] = useState(getInitialLanguage);
  const [, forceUpdate] = useState({});
  
  useEffect(() => {
    // Update document direction and language attributes
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
    
    // Save to localStorage
    localStorage.setItem('fourseasons-language', currentLanguage);
    
    // Update URL parameter without causing navigation
    const url = new URL(window.location);
    url.searchParams.set('lang', currentLanguage);
    window.history.replaceState({}, '', url);
  }, [currentLanguage]);
  
  // Stable changeLanguage function that doesn't cause re-renders unless language actually changes
  const changeLanguage = useCallback((lang) => {
    if (translations[lang] && lang !== currentLanguage) {
      setCurrentLanguage(lang);
      // Force a single re-render after language change
      setTimeout(() => {
        forceUpdate({});
      }, 0);
    }
  }, [currentLanguage]);
  
  // Stable translation function
  const t = useCallback((key) => {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        // Fallback to English if key not found in current language
        let fallbackValue = translations.en;
        for (const fallbackKey of keys) {
          if (fallbackValue && typeof fallbackValue === 'object') {
            fallbackValue = fallbackValue[fallbackKey];
          } else {
            return key; // Return key if not found in fallback either
          }
        }
        return fallbackValue || key;
      }
    }
    
    return value || key;
  }, [currentLanguage]);
  
  const isRTL = currentLanguage === 'ar';
  
  return {
    currentLanguage,
    changeLanguage,
    t,
    isRTL,
    availableLanguages: Object.keys(translations)
  };
};

export default translations;

