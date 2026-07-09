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
    // lineHeight: 1.6,
    backgroundColor: '#ffffff',
  },
  header: {
    // marginBottom: 22,
    // lineHeight: 2,
  },
  name: {
    fontFamily: 'Oswald',
    fontSize: 24,
    color: heading,
    // marginBottom: 2,
    // lineHeight: 1.6,
  },
  headline: {
    fontFamily: 'Oswald',
    fontSize: 14,
    color: dark,
    // marginBottom: 8,
    // lineHeight: 1,
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
    marginHorizontal: 3,
  },
  section: {
    marginTop: 18,
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
    // lineHeight: 1.45,
    lineHeight: 1.6,
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
    marginBottom: 18,
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
    marginTop: 6,
    marginBottom: 2,
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
    // lineHeight: 1.45,
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
    fontSize: 9,
    color: education,
  },
  rule: {
    borderBottom: '0.75pt solid #cccccc',
    marginTop: 10,
    marginBottom: 10,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 3,
  },
  bulletDot: {
    width: 3.5,
    height: 3.5,
    borderRadius: 2,
    backgroundColor: dark,
    marginTop: 3.5,
    marginRight: 6,
  },
  bulletContent: {
    flex: 1,
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

type SectionBlockProps = {
  title: string
  children: ReactNode
  wrap?: boolean
  leadingRule?: boolean
}

type BulletItemProps = {
  text: string
}

function HorizontalRule() {
  return <View style={styles.rule} />
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
  wrap = false,
  leadingRule = false,
}: SectionBlockProps) {
  return (
    <View wrap={wrap} style={styles.section}>
      {leadingRule ? <HorizontalRule /> : null}
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  )
}

function BulletItem({ text }: BulletItemProps) {
  return (
    <View style={styles.bulletRow}>
      <View style={styles.bulletDot} />
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

        <HorizontalRule />

        <SectionBlock title="Summary">
          <View style={{ marginLeft: 14 }}>
            <RichText
              text={resume.summary}
              style={styles.bodyText}
              boldStyle={styles.bodyBold}
            />
          </View>
        </SectionBlock>

        <SectionBlock title="Technical Skills" leadingRule>
          <View style={{ marginLeft: 14 }}>
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
          </View>
        </SectionBlock>

        <SectionBlock title="Experience" wrap leadingRule>
          {resume.experience.map((job) => (
            <View key={job.slug} wrap={false} style={styles.job}>
              <Text style={{ marginBottom: 4 }}>
                <Text style={styles.jobCompany}>{job.company} - </Text>
                <Text style={styles.jobRole}>{job.role}</Text>
                <Text style={styles.jobMeta}>
                  {' '}
                  | {job.period} | {job.location}
                </Text>
              </Text>
              <View style={{ marginLeft: 14 }}>
                {job.highlights.map((highlight) => (
                  <BulletItem key={highlight} text={highlight} />
                ))}
              </View>
              <View style={{ marginLeft: 14 }}>
                <Text style={styles.techLine}>
                  <Text style={styles.techLabel}>Technologies</Text>
                  <Text style={styles.techValue}>: {job.technologies.join(', ')}</Text>
                </Text>
              </View>
            </View>
          ))}
        </SectionBlock>

        <SectionBlock title="OSS" leadingRule>
          {resume.oss.map((project) => (
            <View key={project.name} style={{ marginBottom: 8 }}>
              <Text style={styles.ossTitle}>{project.name}</Text>
              <View style={{ marginLeft: 14 }}>
                <RichText
                  text={project.description}
                  style={styles.ossBody}
                  boldStyle={styles.ossBold}
                />
              </View>
            </View>
          ))}
        </SectionBlock>

        <SectionBlock title="Education" leadingRule>
          {resume.education.map((entry) => (
            <View key={entry.school} style={{ marginLeft: 14 }}>
              <Text>
                <Text style={styles.educationSchool}>{entry.school} </Text>
                <Text style={styles.educationDegree}>— {entry.degree}</Text>
              </Text>
            </View>
          ))}
        </SectionBlock>
      </Page>
    </Document>
  )
}
