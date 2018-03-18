import React from 'react'
import Icon from 'components/icon'
import { Menu } from 'antd'
const { SubMenu } = Menu

export default props => (
  <Menu theme='dark' defaultSelectedKeys={[window.location.pathname]} mode='inline'>
    <Menu.Item key='/'>
      <a href='/'>
        <Icon type='dashboard' />
        <span>Dashboard</span>
      </a>
    </Menu.Item>
    <Menu.Item key='/registerCompany'>
      <a href='registerCompany'>
        <Icon type='form' />
        <span>Cadastrar empresa</span>
      </a>
    </Menu.Item>
    <SubMenu
      key='orders'
      title={<span><Icon type='shopping-cart' /><span>Pedidos</span></span>}
    >
      <Menu.Item key='/orders/newOrder'>
        <a href='orders/newOrder'>
          <Icon type='plus' />
          <span>Novo pedido</span>
        </a>
      </Menu.Item>
      <Menu.Item key='/orders/myOrders'>
        <a href='orders/myOrders'>
          <Icon type='table' />
          <span>Meus pedidos</span>
        </a>
      </Menu.Item>
    </SubMenu>
    <Menu.Item key='/myAccount'>
      <a href='myAccount'>
        <Icon type='user' />
        <span>Minha conta</span>
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href='logout'>
        <Icon type='logout' />
        <span>Sair</span>
      </a>
    </Menu.Item>
  </Menu>
)
