import type { ReactNode } from 'react'
import {
  Document,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer'

import { RichText } from '#/components/resume-pdf/rich-text'
import { resume } from '#/data/resume'

const accent = '#e91d63'
const heading = '#424242'
const dark = '#2a2a2e'
const body = '#666666'
const education = '#2e4440'

const styles = StyleSheet.create({
  page: {
    paddingTop: 42,
    paddingBottom: 42,
    paddingHorizontal: 42,
    fontFamily: 'SourceCodePro',
    fontSize: 9,
    color: body,
    lineHeight: 1.35,
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 22,
  },
  name: {
    fontFamily: 'Oswald',
    fontSize: 24,
    color: heading,
    marginBottom: 2,
  },
  headline: {
    fontFamily: 'Oswald',
    fontSize: 14,
    color: dark,
    marginBottom: 8,
    lineHeight: 1.25,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  contactLink: {
    fontFamily: 'RobotoCondensed',
    fontSize: 9,
    color: accent,
    textDecoration: 'none',
  },
  contactSep: {
    fontFamily: 'RobotoCondensed',
    fontSize: 9,
    color: dark,
    marginHorizontal: 5,
  },
  section: {
    marginTop: 22,
  },
  sectionTitle: {
    fontFamily: 'Oswald',
    fontSize: 12,
    color: heading,
    marginBottom: 8,
  },
  bodyText: {
    fontFamily: 'SourceCodePro',
    fontSize: 9,
    color: body,
    lineHeight: 1.45,
  },
  bodyBold: {
    fontFamily: 'SourceCodePro',
    fontSize: 9,
    color: body,
    fontWeight: 700,
  },
  bulletText: {
    fontFamily: 'SourceCodePro',
    fontSize: 9,
    color: dark,
    lineHeight: 1.4,
  },
  bulletBold: {
    fontFamily: 'SourceCodePro',
    fontSize: 9,
    color: dark,
    fontWeight: 700,
  },
  skillLabel: {
    fontFamily: 'SourceCodePro',
    fontSize: 9,
    color: body,
    fontWeight: 700,
  },
  skillColon: {
    fontFamily: 'SourceCodePro',
    fontSize: 9,
    color: dark,
  },
  skillValue: {
    fontFamily: 'SourceCodePro',
    fontSize: 9,
    color: body,
  },
  skillLine: {
    marginBottom: 3,
  },
  job: {
    marginBottom: 12,
  },
  jobCompany: {
    fontFamily: 'SourceCodePro',
    fontSize: 11,
    color: accent,
    fontWeight: 700,
  },
  jobRole: {
    fontFamily: 'SourceCodePro',
    fontSize: 11,
    color: body,
    fontWeight: 700,
  },
  jobMeta: {
    fontFamily: 'SourceCodePro',
    fontSize: 9,
    color: body,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  bulletMarker: {
    width: 11,
    fontFamily: 'Helvetica',
    fontSize: 9,
    color: dark,
    lineHeight: 1.4,
  },
  bulletContent: {
    flex: 1,
  },
  techLabel: {
    fontFamily: 'SourceCodePro',
    fontSize: 9,
    color: dark,
    fontWeight: 700,
  },
  techValue: {
    fontFamily: 'SourceCodePro',
    fontSize: 9,
    color: dark,
  },
  techLine: {
    marginTop: 4,
    lineHeight: 1.4,
  },
  ossTitle: {
    fontFamily: 'SourceCodePro',
    fontSize: 11,
    color: accent,
    fontWeight: 700,
    marginBottom: 2,
  },
  ossBody: {
    fontFamily: 'SourceCodePro',
    fontSize: 9,
    color: body,
    lineHeight: 1.45,
  },
  ossBold: {
    fontFamily: 'SourceCodePro',
    fontSize: 9,
    color: body,
    fontWeight: 700,
  },
  educationSchool: {
    fontFamily: 'SourceCodePro',
    fontSize: 11,
    color: accent,
    fontWeight: 700,
  },
  educationDegree: {
    fontFamily: 'SourceCodePro',
    fontSize: 11,
    color: education,
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

function BulletItem({ text }: { text: string }) {
  return (
    <View style={styles.bulletRow}>
      <Text style={styles.bulletMarker}>●</Text>
      <View style={styles.bulletContent}>
        <RichText text={text} style={styles.bulletText} boldStyle={styles.bulletBold} />
      </View>
    </View>
  )
}

export function ResumeDocument() {
  return (
    <Document title={`${resume.name} — Resume`} author={resume.name}>
      <Page size="A4" style={styles.page}>
        <View wrap={false} style={styles.header}>
          <Text style={styles.name}>{resume.name}</Text>
          <Text style={styles.headline}>{resume.title}</Text>
          <ContactRow />
        </View>

        <SectionBlock title="Summary">
          <RichText
            text={resume.summary}
            style={styles.bodyText}
            boldStyle={styles.bodyBold}
          />
        </SectionBlock>

        <SectionBlock title="Technical Skills">
          {(Object.entries(resume.skills) as [keyof typeof resume.skills, string[]][]).map(
            ([key, items]) => (
              <View key={key} style={styles.skillLine}>
                <Text>
                  <Text style={styles.skillLabel}>{skillLabels[key]}</Text>
                  <Text style={styles.skillColon}>: </Text>
                  <Text style={styles.skillValue}>{items.join(', ')}</Text>
                </Text>
              </View>
            ),
          )}
        </SectionBlock>

        <View style={styles.section}>
          {resume.experience.map((job, index) => (
            <View key={job.slug} wrap={false} style={styles.job}>
              {index === 0 ? <Text style={styles.sectionTitle}>Experience</Text> : null}
              <Text style={{ marginBottom: 4 }}>
                <Text style={styles.jobCompany}>{job.company} - </Text>
                <Text style={styles.jobRole}>{job.role}</Text>
                <Text style={styles.jobMeta}>
                  {' '}
                  | {job.period} | {job.location}
                </Text>
              </Text>
              {job.highlights.map((highlight) => (
                <BulletItem key={highlight} text={highlight} />
              ))}
              <Text style={styles.techLine}>
                <Text style={styles.techLabel}>Technologies</Text>
                <Text style={styles.techValue}>: {job.technologies.join(', ')}</Text>
              </Text>
            </View>
          ))}
        </View>

        <SectionBlock title="OSS">
          {resume.oss.map((project) => (
            <View key={project.name} style={{ marginBottom: 8 }}>
              <Text style={styles.ossTitle}>{project.name}</Text>
              <RichText
                text={project.description}
                style={styles.ossBody}
                boldStyle={styles.ossBold}
              />
            </View>
          ))}
        </SectionBlock>

        <SectionBlock title="Education">
          {resume.education.map((entry) => (
            <Text key={entry.school}>
              <Text style={styles.educationSchool}>{entry.school} </Text>
              <Text style={styles.educationDegree}>— {entry.degree}</Text>
            </Text>
          ))}
        </SectionBlock>
      </Page>
    </Document>
  )
}
