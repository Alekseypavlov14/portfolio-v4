import { ComponentPropsWithoutRef, FC } from 'react'
import { ProjectEntity, hasImage } from '@/entities/projects'
import { Chip } from '@/shared/components/Chip'
import { clsx } from '@/shared/utils/clsx'
import styles from './PortfolioCard.module.scss'
import Image from 'next/image'

interface PortfolioCardProps extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
  project: ProjectEntity
}

export const PortfolioCard: FC<PortfolioCardProps> = ({ className, project, ...props }) => {
  const classNames = clsx(styles.PortfolioCard, className)

  return (
    <div className={classNames} {...props}>
      {hasImage(project) ? (
        <div className={styles.ImageContainer}>
          <Image src={project.imageSource} alt='' />
        </div>
      ) : null}

      <div className={styles.ProjectType}>{project.type.name}</div>

      <div className={styles.Title}>{project.name}</div>
      <div className={styles.Description}>{project.description}</div>

      <div className={styles.Buttons}></div>

      <div className={styles.Footer}>
        <div className={styles.Technologies}>
          {project.technologies.map(technology => (
            <Chip key={technology.id}>{technology.name}</Chip>
          ))}
        </div>
      </div>
    </div>
  )
}