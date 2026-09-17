import { Component } from '@angular/core';


import { ContentBlockRenderer } from '../../../shared/components/content-block-renderer/content-block-renderer';


@Component({

  selector: 'app-content-block-test',

  imports: [
    ContentBlockRenderer
  ],

  templateUrl: './content-block-test.html',

  styleUrl: './content-block-test.css'

})
export class ContentBlockTest {

  blocks: any[] = [

    // TEXT

    {
      blockType: 'TEXT',

      data: {
        content:
          'I am a Java Backend Engineer focused on building scalable, reliable, and production-ready backend systems.'
      },

      sortOrder: 0
    },


    // HEADING

    {
      blockType: 'HEADING',
      data: {
        text: 'About Me',
        level: 2
      },
      sortOrder: 1
    },


    // HEADING - H3

    {
      blockType: 'HEADING',

      data: {
        text: 'Backend Engineering',
        level: 3
      },

      sortOrder: 2
    },


    // IMAGE

    {
      blockType: 'IMAGE',

      data: {
        url: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
        alt: 'Computer motherboard and technology'
      },

      sortOrder: 3
    },


    // RICH TEXT

    {
      blockType: 'RICH_TEXT',

      data: {
        content:
          'I work primarily with Java, Spring Boot, microservices, event-driven architecture, databases, authentication, Docker, Kubernetes, and CI/CD.'
      },

      sortOrder: 4
    },


    // SKILLS

    {
      blockType: 'SKILLS',

      data: {
        title: 'Backend Technologies',

        skills: [
          'Java',
          'Spring Boot',
          'Spring Security',
          'JPA',
          'Hibernate',
          'REST APIs',
          'Microservices'
        ]
      },

      sortOrder: 5
    },


    // SKILLS - SECOND GROUP

    {
      blockType: 'SKILLS',

      data: {
        title: 'Infrastructure & DevOps',

        skills: [
          'Docker',
          'Kubernetes',
          'Kafka',
          'RabbitMQ',
          'GitHub Actions',
          'Jenkins',
          'AWS'
        ]
      },

      sortOrder: 6
    },


    // TITLE + BULLETS

    {
      blockType: 'TITLE_BULLETS',

      data: {
        title: 'Experience',

        items: [
          'Built production Spring Boot microservices.',
          'Designed REST APIs for distributed systems.',
          'Implemented event-driven communication using Kafka.',
          'Worked with authentication using Keycloak and OAuth2.',
          'Implemented automated testing with JUnit and Mockito.'
        ]
      },

      sortOrder: 7
    },


    // TITLE + BULLETS - SECOND GROUP

    {
      blockType: 'TITLE_BULLETS',

      data: {
        title: 'What I Work On',

        items: [
          'Backend architecture',
          'Distributed systems',
          'Cloud-native applications',
          'Event-driven systems',
          'Generative AI',
          'Agentic AI'
        ]
      },

      sortOrder: 8
    },


    // CUSTOM

    {
      blockType: 'CUSTOM',

      data: {
        category: 'backend',

        yearsOfExperience: 3,

        currentlyLearning: [
          'LangGraph',
          'LLMs',
          'Vector Databases',
          'Graph Memory'
        ],

        featured: true
      },

      sortOrder: 9
    },


    // CUSTOM - MORE COMPLEX DATA

    {
      blockType: 'CUSTOM',

      data: {
        project: {
          name: 'Portfolio Platform',
          type: 'Personal Project'
        },

        technologies: [
          'Angular',
          'Spring Boot',
          'Keycloak',
          'Docker'
        ],

        deployment: {
          environment: 'production',
          containerized: true
        },

        metadata: {
          version: '1.0',
          active: true
        }
      },

      sortOrder: 10
    }

  ];

}