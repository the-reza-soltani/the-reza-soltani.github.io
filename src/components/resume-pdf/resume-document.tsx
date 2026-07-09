import type { ReactNode } from 'react'
import {
  Document,
  Font,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer'

import { resume } from '#/data/resume'

Font.registerHyphenationCallback((word) => [word])

const ink = '#000000'
const body = '#333333'
const muted = '#555555'
const border = '#cccccc'
const link = '#1155cc'

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: ink,
    lineHeight: 1.45,
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 14,
    borderBottom: `1pt solid ${border}`,
    paddingBottom: 12,
  },
  name: {
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    color: ink,
    marginBottom: 4,
  },
  title: {
    fontSize: 11,
    fontFamily: 'Helvetica',
    color: muted,
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  contactLink: {
    fontSize: 9,
    fontFamily: 'Helvetica',
    color: link,
    textDecoration: 'none',
  },
  contactSep: {
    fontSize: 9,
    fontFamily: 'Helvetica',
    color: body,
    marginHorizontal: 6,
  },
  section: {
    marginTop: 14,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: ink,
    marginBottom: 6,
  },
  paragraph: {
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: body,
    lineHeight: 1.45,
  },
  skillLine: {
    fontSize: 9,
    fontFamily: 'Helvetica',
    color: body,
    marginBottom: 4,
    lineHeight: 1.4,
  },
  skillLabel: {
    fontFamily: 'Helvetica-Bold',
    color: ink,
  },
  job: {
    marginBottom: 10,
  },
  jobLine: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 10,
    color: ink,
    marginBottom: 4,
  },
  bullet: {
    fontSize: 9,
    fontFamily: 'Helvetica',
    color: body,
    marginBottom: 2,
    paddingLeft: 2,
    lineHeight: 1.4,
  },
  technologies: {
    fontSize: 9,
    fontFamily: 'Helvetica',
    color: body,
    marginTop: 4,
    lineHeight: 1.4,
  },
  ossItem: {
    marginBottom: 8,
  },
  ossTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 10,
    color: ink,
    marginBottom: 2,
  },
  educationLine: {
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: body,
  },
})

const skillLabels: Record<keyof typeof resume.skills, string> = {
  backend: 'Backend',
  frontend: 'Frontend',
  databases: 'Databases',
  architecture: 'Architecture',
  messaging: 'Messaging & Streaming',
  devops: 'DevOps & Cloud',
  performance: 'Performance Optimization',
  testing: 'Testing & Security',
  programming: 'Programming',
}

function ContactRow() {
  return (
    <View style={styles.contactRow}>
      <Link src={resume.contact.linkedin} style={styles.contactLink}>
        LinkedIn
      </Link>
      <Text style={styles.contactSep}>|</Text>
      <Link src={resume.contact.github} style={styles.contactLink}>
        GitHub
      </Link>
      <Text style={styles.contactSep}>|</Text>
      <Link src={`mailto:${resume.contact.email}`} style={styles.contactLink}>
        {resume.contact.email}
      </Link>
    </View>
  )
}

function SectionBlock({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <View wrap={false} style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  )
}

export function ResumeDocument() {
  return (
    <Document title={`${resume.name} — Resume`} author={resume.name}>
      <Page size="A4" style={styles.page}>
        <View wrap={false} style={styles.header}>
          <Text style={styles.name}>{resume.name}</Text>
          <Text style={styles.title}>{resume.title}</Text>
          <ContactRow />
        </View>

        <SectionBlock title="Summary">
          <Text style={styles.paragraph}>{resume.summary}</Text>
        </SectionBlock>

        <SectionBlock title="Technical Skills">
          {(Object.entries(resume.skills) as [keyof typeof resume.skills, string[]][]).map(
            ([key, items]) => (
              <Text key={key} style={styles.skillLine}>
                <Text style={styles.skillLabel}>{skillLabels[key]}: </Text>
                {items.join(', ')}
              </Text>
            ),
          )}
        </SectionBlock>

        <View style={styles.section}>
          {resume.experience.map((job, index) => (
            <View key={job.slug} wrap={false} style={styles.job}>
              {index === 0 ? (
                <Text style={styles.sectionTitle}>Experience</Text>
              ) : null}
              <Text style={styles.jobLine}>
                {job.company} - {job.role} | {job.period} | {job.location}
              </Text>
              {job.highlights.map((highlight) => (
                <Text key={highlight} style={styles.bullet}>
                  ● {highlight}
                </Text>
              ))}
              <Text style={styles.technologies}>
                Technologies: {job.technologies.join(', ')}
              </Text>
            </View>
          ))}
        </View>

        <SectionBlock title="OSS">
          {resume.oss.map((project) => (
            <View key={project.name} style={styles.ossItem}>
              <Text style={styles.ossTitle}>{project.name}</Text>
              <Text style={styles.paragraph}>{project.description}</Text>
            </View>
          ))}
        </SectionBlock>

        <SectionBlock title="Education">
          {resume.education.map((entry) => (
            <Text key={entry.school} style={styles.educationLine}>
              {entry.school} — {entry.degree}
            </Text>
          ))}
        </SectionBlock>
      </Page>
    </Document>
  )
}
