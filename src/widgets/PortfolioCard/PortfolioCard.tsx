import { ComponentPropsWithoutRef, FC } from 'react'
import { DateTime, formatDateWide } from '@/shared/utils/date-time'
import { PortfolioCardLinkButton } from './components/PortfolioCardLinkButton'
import { PortfolioCardRepoButton } from './components/PortfolioCardRepoButton'
import { ProjectEntity, hasImage } from '@/entities/projects'
import { Chip } from '@/shared/components/Chip'
import { clsx } from '@/shared/utils/clsx'
import styles from './PortfolioCard.module.scss'
import Image from 'next/image'

interface PortfolioCardProps extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
  project: ProjectEntity
  stretch?: boolean
}

export const PortfolioCard: FC<PortfolioCardProps> = ({ className, project, stretch, ...props }) => {
  const classNames = clsx(styles.PortfolioCard, stretch && styles.Stretch, className)

  const formattedDate = formatDateWide(new DateTime(project.date))

  return (
    <div className={classNames} {...props}>
      {hasImage(project) ? (
        <div className={styles.ImageContainer}>
          <Image src={project.imageSource} alt='' />
        </div>
      ) : null}

      <div className={styles.Headline}>
        <div className={styles.ProjectType}>{project.type.name}</div>
        <div className={styles.Title}>{project.name}</div>
      </div>

      <div className={styles.Description}>{project.description}</div>

      <div className={styles.Buttons}>
        <PortfolioCardLinkButton link={project.link} />
        <PortfolioCardRepoButton repository={project.repository} />
      </div>

      <div className={styles.Footer}>
        <div className={styles.Technologies}>
          {project.technologies.map(technology => (
            <Chip key={technology.id}>{technology.name}</Chip>
          ))}
        </div>

        <Chip>{formattedDate}</Chip>
      </div>
    </div>
  )
}