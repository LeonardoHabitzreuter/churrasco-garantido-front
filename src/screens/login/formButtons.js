import React from 'react'
import Button from 'components/button'
import styles from './formButtons.styl'

export default ({ userHasAnAccount, onChangeForm }) => (
  <div className={styles.buttonsDiv}>
    <Button type='button' onClick={onChangeForm} className={styles.button}>
      {userHasAnAccount ? 'Criar uma conta' : 'Logar'}
    </Button>
    <Button className={styles.button}>
      {userHasAnAccount ? 'Logar' : 'Criar uma conta'}
    </Button>
  </div>
)
