import React from "react"
import { withTrans } from '../i18n/withTrans';

export default function NotFound(props) {

  const {t,i18n} = props

  return (
    <div>
      <h1>{t('not_found')}</h1>
      <p>{t('oops')}</p>
    </div>
  )
}