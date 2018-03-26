import React from 'react'
import Icon from 'components/icon'
import { Menu } from 'antd'
const SubMenu = Menu.SubMenu

const reloadPage = ({ key }) => {
  window.location.href = key
}

export default props => (
  <Menu theme='dark' defaultSelectedKeys={[window.location.pathname]} mode='inline' onClick={reloadPage}>
    <Menu.Item key='/'>
      <Icon type='dashboard' />
      <span>Dashboard</span>
    </Menu.Item>
    <Menu.Item key='/registerCompany'>
      <Icon type='form' />
      <span>Cadastrar empresa</span>
    </Menu.Item>
    <SubMenu
      key='orders'
      title={<span><Icon type='shopping-cart' /><span>Pedidos</span></span>}
    >
      <Menu.Item key='/orders/newOrder'>
        <Icon type='plus' />
        <span>Novo pedido</span>
      </Menu.Item>
      <Menu.Item key='/orders/myOrders'>
        <Icon type='table' />
        <span>Meus pedidos</span>
      </Menu.Item>
    </SubMenu>
    <Menu.Item key='/myAccount'>
      <Icon type='user' />
      <span>Minha conta</span>
    </Menu.Item>
    <Menu.Item key='/logout'>
      <Icon type='logout' />
      <span>Sair</span>
    </Menu.Item>
  </Menu>
)
