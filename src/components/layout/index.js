import React, { Component } from 'react'
import Menu from 'components/menu'
import Icon from 'components/icon'
import Carousel from 'components/carousel'
import { Layout as AntLayout, Breadcrumb } from 'antd'
import styles from './styles.styl'
const Header = AntLayout.Header
const Content = AntLayout.Content
const Footer = AntLayout.Footer
const Sider = AntLayout.Sider

const breadcrumbsByURL = [{
  url: '/',
  breadcrumbs: [
    'Dashboard'
  ]
}, {
  url: '/registerCompany',
  breadcrumbs: [
    'Cadastrar empresa'
  ]
}, {
  url: '/newOrder',
  breadcrumbs: [
    'Pedidos',
    'Novo pedido'
  ]
}, {
  url: '/myOrders',
  breadcrumbs: [
    'Pedidos',
    'Meus pedidos'
  ]
}, {
  url: '/myAccount',
  breadcrumbs: [
    'Minha conta'
  ]
}, {
  url: '/logout',
  breadcrumbs: []
}]

class Layout extends Component {
  state = {
    collapsed: false
  }

  onCollapse (collapsed) {
    this.setState({ collapsed })
  }

  render () {
    return (
      <AntLayout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={value => this.onCollapse(value)}
        >
          <div className='logo'>
            <a href='/'><Icon type='ant-design' className={styles.logo} /></a>
          </div>
          <Menu />
        </Sider>
        <AntLayout>
          <Header style={{ background: '#fff', padding: '10px' }}>
            <Carousel autoplay dots={false} effect='fade'>
              <h3 className={styles.textCenter}>Cadastre uma empresa</h3>
              <h3 className={styles.textCenter}>Requisite uma ordem de compra</h3>
              <h3 className={styles.textCenter}>Veja suas ordens dentro do seu Dashboard!</h3>
            </Carousel>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>{
              breadcrumbsByURL
                .find(element => element.url === window.location.pathname)
                .breadcrumbs.map(text => <Breadcrumb.Item>{text}</Breadcrumb.Item>)
            }</Breadcrumb>
            <div style={{ padding: 24, background: '#fff', overflow: 'auto' }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Projeto churrasco garantido! ©2018 Criado por Leonardo Habitzreuter
          </Footer>
        </AntLayout>
      </AntLayout>
    )
  }
}

export default Layout
