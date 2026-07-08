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

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: '#111827',
    lineHeight: 1.45,
  },
  header: {
    marginBottom: 14,
    borderBottom: '1pt solid #e5e7eb',
    paddingBottom: 12,
  },
  name: {
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
  },
  title: {
    fontSize: 11,
    color: '#4b5563',
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  contactLink: {
    fontSize: 9,
    color: '#2563eb',
    textDecoration: 'none',
  },
  section: {
    marginTop: 14,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 6,
    color: '#111827',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  paragraph: {
    fontSize: 10,
    color: '#374151',
    marginBottom: 4,
  },
  skillGroup: {
    marginBottom: 6,
  },
  skillLabel: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
    marginBottom: 2,
  },
  skillItems: {
    fontSize: 9,
    color: '#4b5563',
  },
  job: {
    marginBottom: 10,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  jobCompany: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 11,
  },
  jobPeriod: {
    fontSize: 9,
    color: '#6b7280',
  },
  jobRole: {
    fontSize: 10,
    color: '#4b5563',
    marginBottom: 4,
  },
  bullet: {
    fontSize: 9,
    color: '#374151',
    marginBottom: 2,
    paddingLeft: 8,
  },
  techRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: 4,
  },
  techPill: {
    fontSize: 8,
    color: '#374151',
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  ossItem: {
    marginBottom: 6,
  },
  ossTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 10,
  },
})

Font.registerHyphenationCallback((word) => [word])

const skillLabels: Record<keyof typeof resume.skills, string> = {
  languages: 'Languages',
  backend: 'Backend',
  databases: 'Databases',
  messaging: 'Messaging',
  devops: 'DevOps',
  architecture: 'Architecture',
  others: 'Others',
}

export function ResumeDocument() {
  return (
    <Document title={`${resume.name} — Resume`}>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{resume.name}</Text>
          <Text style={styles.title}>{resume.title}</Text>
          <View style={styles.contactRow}>
            <Link src={`mailto:${resume.contact.email}`} style={styles.contactLink}>
              {resume.contact.email}
            </Link>
            <Link src={resume.contact.linkedin} style={styles.contactLink}>
              LinkedIn
            </Link>
            <Link src={resume.contact.github} style={styles.contactLink}>
              GitHub
            </Link>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.paragraph}>{resume.summary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          {(Object.entries(resume.skills) as [keyof typeof resume.skills, string[]][]).map(
            ([key, items]) => (
              <View key={key} style={styles.skillGroup}>
                <Text style={styles.skillLabel}>{skillLabels[key]}</Text>
                <Text style={styles.skillItems}>{items.join(' · ')}</Text>
              </View>
            ),
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {resume.experience.map((job) => (
            <View key={job.slug} style={styles.job} wrap={false}>
              <View style={styles.jobHeader}>
                <Text style={styles.jobCompany}>{job.company}</Text>
                <Text style={styles.jobPeriod}>{job.period}</Text>
              </View>
              <Text style={styles.jobRole}>
                {job.role} · {job.location}
              </Text>
              {job.highlights.map((highlight) => (
                <Text key={highlight} style={styles.bullet}>
                  • {highlight}
                </Text>
              ))}
              <View style={styles.techRow}>
                {job.technologies.map((tech) => (
                  <Text key={tech} style={styles.techPill}>
                    {tech}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Open Source</Text>
          {resume.oss.map((project) => (
            <View key={project.name} style={styles.ossItem}>
              <Text style={styles.ossTitle}>{project.name}</Text>
              <Text style={styles.paragraph}>{project.description}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {resume.education.map((entry) => (
            <View key={entry.school}>
              <Text style={styles.jobCompany}>{entry.school}</Text>
              <Text style={styles.paragraph}>{entry.degree}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  )
}
