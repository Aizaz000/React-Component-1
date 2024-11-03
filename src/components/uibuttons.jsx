import React from 'react'

function uibuttons() {
  return (
    <div className="wrapper">
    <nav id="sidebar" className="sidebar js-sidebar">
        <div className="sidebar-content js-simplebar">
            <a className="sidebar-brand" href="index.html">
      <span className="align-middle">AdminKit</span>
    </a>

            <ul className="sidebar-nav">
                <li className="sidebar-header">
                    Pages
                </li>

                <li className="sidebar-item">
                    <a className="sidebar-link" href="index.html">
          <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Dashboard</span>
        </a>
                </li>

                <li className="sidebar-item">
                    <a className="sidebar-link" href="pages-profile.html">
          <i className="align-middle" data-feather="user"></i> <span className="align-middle">Profile</span>
        </a>
                </li>

                <li className="sidebar-item">
                    <a className="sidebar-link" href="pages-sign-in.html">
          <i className="align-middle" data-feather="log-in"></i> <span className="align-middle">Sign In</span>
        </a>
                </li>

                <li className="sidebar-item">
                    <a className="sidebar-link" href="pages-sign-up.html">
          <i className="align-middle" data-feather="user-plus"></i> <span className="align-middle">Sign Up</span>
        </a>
                </li>

                <li className="sidebar-item">
                    <a className="sidebar-link" href="pages-blank.html">
          <i className="align-middle" data-feather="book"></i> <span className="align-middle">Blank</span>
        </a>
                </li>

                <li className="sidebar-header">
                    Tools & Components
                </li>

                <li className="sidebar-item active">
                    <a className="sidebar-link" href="ui-buttons.html">
          <i className="align-middle" data-feather="square"></i> <span className="align-middle">Buttons</span>
        </a>
                </li>

                <li className="sidebar-item">
                    <a className="sidebar-link" href="ui-forms.html">
          <i className="align-middle" data-feather="check-square"></i> <span className="align-middle">Forms</span>
        </a>
                </li>

                <li className="sidebar-item">
                    <a className="sidebar-link" href="ui-cards.html">
          <i className="align-middle" data-feather="grid"></i> <span className="align-middle">Cards</span>
        </a>
                </li>

                <li className="sidebar-item">
                    <a className="sidebar-link" href="ui-typography.html">
          <i className="align-middle" data-feather="align-left"></i> <span className="align-middle">Typography</span>
        </a>
                </li>

                <li className="sidebar-item">
                    <a className="sidebar-link" href="icons-feather.html">
          <i className="align-middle" data-feather="coffee"></i> <span className="align-middle">Icons</span>
        </a>
                </li>

                <li className="sidebar-header">
                    Plugins & Addons
                </li>

                <li className="sidebar-item">
                    <a className="sidebar-link" href="charts-chartjs.html">
          <i className="align-middle" data-feather="bar-chart-2"></i> <span className="align-middle">Charts</span>
        </a>
                </li>

                <li className="sidebar-item">
                    <a className="sidebar-link" href="maps-google.html">
          <i className="align-middle" data-feather="map"></i> <span className="align-middle">Maps</span>
        </a>
                </li>
            </ul>

            <div className="sidebar-cta">
                <div className="sidebar-cta-content">
                    <strong className="d-inline-block mb-2">Upgrade to Pro</strong>
                    <div className="mb-3 text-sm">
                        Are you looking for more components? Check out our premium version.
                    </div>
                    <div className="d-grid">
                        <a href="upgrade-to-pro.html" className="btn btn-primary">Upgrade to Pro</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <div className="main">
        <nav className="navbar navbar-expand navbar-light navbar-bg">
            <a className="sidebar-toggle js-sidebar-toggle">
      <i className="hamburger align-self-center"></i>
    </a>

            <div className="navbar-collapse collapse">
                <ul className="navbar-nav navbar-align">
                    <li className="nav-item dropdown">
                        <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
                            <div className="position-relative">
                                <i className="align-middle" data-feather="bell"></i>
                                <span className="indicator">4</span>
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
                            <div className="dropdown-menu-header">
                                4 New Notifications
                            </div>
                            <div className="list-group">
                                <a href="#" className="list-group-item">
                                    <div className="row g-0 align-items-center">
                                        <div className="col-2">
                                            <i className="text-danger" data-feather="alert-circle"></i>
                                        </div>
                                        <div className="col-10">
                                            <div className="text-dark">Update completed</div>
                                            <div className="text-muted small mt-1">Restart server 12 to complete the update.</div>
                                            <div className="text-muted small mt-1">30m ago</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="list-group-item">
                                    <div className="row g-0 align-items-center">
                                        <div className="col-2">
                                            <i className="text-warning" data-feather="bell"></i>
                                        </div>
                                        <div className="col-10">
                                            <div className="text-dark">Lorem ipsum</div>
                                            <div className="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
                                            <div className="text-muted small mt-1">2h ago</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="list-group-item">
                                    <div className="row g-0 align-items-center">
                                        <div className="col-2">
                                            <i className="text-primary" data-feather="home"></i>
                                        </div>
                                        <div className="col-10">
                                            <div className="text-dark">Login from 192.186.1.8</div>
                                            <div className="text-muted small mt-1">5h ago</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="list-group-item">
                                    <div className="row g-0 align-items-center">
                                        <div className="col-2">
                                            <i className="text-success" data-feather="user-plus"></i>
                                        </div>
                                        <div className="col-10">
                                            <div className="text-dark">New connection</div>
                                            <div className="text-muted small mt-1">Christina accepted your request.</div>
                                            <div className="text-muted small mt-1">14h ago</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="dropdown-menu-footer">
                                <a href="#" className="text-muted">Show all notifications</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-bs-toggle="dropdown">
                            <div className="position-relative">
                                <i className="align-middle" data-feather="message-square"></i>
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="messagesDropdown">
                            <div className="dropdown-menu-header">
                                <div className="position-relative">
                                    4 New Messages
                                </div>
                            </div>
                            <div className="list-group">
                                <a href="#" className="list-group-item">
                                    <div className="row g-0 align-items-center">
                                        <div className="col-2">
                                            <img src="img/avatars/avatar-5.jpg" className="avatar img-fluid rounded-circle" alt="Vanessa Tucker"/>
                                        </div>
                                        <div className="col-10 ps-2">
                                            <div className="text-dark">Vanessa Tucker</div>
                                            <div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
                                            <div className="text-muted small mt-1">15m ago</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="list-group-item">
                                    <div className="row g-0 align-items-center">
                                        <div className="col-2">
                                            <img src="img/avatars/avatar-2.jpg" className="avatar img-fluid rounded-circle" alt="William Harris"/>
                                        </div>
                                        <div className="col-10 ps-2">
                                            <div className="text-dark">William Harris</div>
                                            <div className="text-muted small mt-1">Curabitur ligula sapien euismod vitae.</div>
                                            <div className="text-muted small mt-1">2h ago</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="list-group-item">
                                    <div className="row g-0 align-items-center">
                                        <div className="col-2">
                                            <img src="img/avatars/avatar-4.jpg" className="avatar img-fluid rounded-circle" alt="Christina Mason"/>
                                        </div>
                                        <div className="col-10 ps-2">
                                            <div className="text-dark">Christina Mason</div>
                                            <div className="text-muted small mt-1">Pellentesque auctor neque nec urna.</div>
                                            <div className="text-muted small mt-1">4h ago</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="list-group-item">
                                    <div className="row g-0 align-items-center">
                                        <div className="col-2">
                                            <img src="img/avatars/avatar-3.jpg" className="avatar img-fluid rounded-circle" alt="Sharon Lessman"/>
                                        </div>
                                        <div className="col-10 ps-2">
                                            <div className="text-dark">Sharon Lessman</div>
                                            <div className="text-muted small mt-1">Aenean tellus metus, bibendum sed, posuere ac, mattis non.</div>
                                            <div className="text-muted small mt-1">5h ago</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="dropdown-menu-footer">
                                <a href="#" className="text-muted">Show all messages</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
            <i className="align-middle" data-feather="settings"></i>
          </a>

                        <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
            <img src="img/avatars/avatar.jpg" className="avatar img-fluid rounded me-1" alt="Charles Hall" /> <span className="text-dark">Charles Hall</span>
          </a>
                        <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="pages-profile.html"><i className="align-middle me-1" data-feather="user"></i> Profile</a>
                            <a className="dropdown-item" href="#"><i className="align-middle me-1" data-feather="pie-chart"></i> Analytics</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="index.html"><i className="align-middle me-1" data-feather="settings"></i> Settings & Privacy</a>
                            <a className="dropdown-item" href="#"><i className="align-middle me-1" data-feather="help-circle"></i> Help Center</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Log out</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

        <main className="content">
            <div className="container-fluid p-0">

                <div className="mb-3">
                    <h1 className="h3 d-inline align-middle">Buttons</h1>
                    <a className="badge bg-dark text-white ms-2" href="upgrade-to-pro.html">
  Get more button examples
</a>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Basic Buttons</h5>
                                <h6 className="card-subtitle text-muted">Default Bootstrap buttons style.</h6>
                            </div>
                            <div className="card-body text-center">
                                <div className="mb-3">
                                    <button className="btn btn-primary">Primary</button>
                                    <button className="btn btn-secondary">Secondary</button>
                                    <button className="btn btn-success">Success</button>
                                    <button className="btn btn-danger">Danger</button>
                                    <button className="btn btn-warning">Warning</button>
                                    <button className="btn btn-info">Info</button>
                                </div>
                                <div>
                                    <button className="btn btn-primary" disabled>Primary</button>
                                    <button className="btn btn-secondary" disabled>Secondary</button>
                                    <button className="btn btn-success" disabled>Success</button>
                                    <button className="btn btn-danger" disabled>Danger</button>
                                    <button className="btn btn-warning" disabled>Warning</button>
                                    <button className="btn btn-info" disabled>Info</button>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Button Sizes</h5>
                                <h6 className="card-subtitle text-muted">Fancy larger or smaller buttons.</h6>
                            </div>
                            <div className="card-body text-center">
                                <div className="mb-3">
                                    <button className="btn btn-primary btn-sm">Small</button>
                                    <button className="btn btn-primary">Medium</button>
                                    <button className="btn btn-primary btn-lg">Large</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Button Group</h5>
                                <h6 className="card-subtitle text-muted">Button group components.</h6>
                            </div>
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted">Horizontal button group</h6>
                                <div className="btn-group btn-group-lg mb-3" role="group" aria-label="Large button group">
                                    <button type="button" className="btn btn-secondary">Left</button>
                                    <button type="button" className="btn btn-secondary">Middle</button>
                                    <button type="button" className="btn btn-secondary">Right</button>
                                </div>
                                <br/>
                                <div className="btn-group mb-3" role="group" aria-label="Default button group">
                                    <button type="button" className="btn btn-secondary">Left</button>
                                    <button type="button" className="btn btn-secondary">Middle</button>
                                    <button type="button" className="btn btn-secondary">Right</button>
                                </div>
                                <br/>
                                <div className="btn-group btn-group-sm mb-4" role="group" aria-label="Small button group">
                                    <button type="button" className="btn btn-secondary">Left</button>
                                    <button type="button" className="btn btn-secondary">Middle</button>
                                    <button type="button" className="btn btn-secondary">Right</button>
                                </div>

                                <h6 className="card-subtitle mb-2 text-muted">Button toolbar</h6>
                                <div className="btn-toolbar mb-4" role="toolbar" aria-label="Toolbar with button groups">
                                    <div className="btn-group me-2" role="group" aria-label="First group">
                                        <button type="button" className="btn btn-secondary">1</button>
                                        <button type="button" className="btn btn-secondary">2</button>
                                        <button type="button" className="btn btn-secondary">3</button>
                                        <button type="button" className="btn btn-secondary">4</button>
                                    </div>
                                    <div className="btn-group me-2" role="group" aria-label="Second group">
                                        <button type="button" className="btn btn-secondary">5</button>
                                        <button type="button" className="btn btn-secondary">6</button>
                                        <button type="button" className="btn btn-secondary">7</button>
                                    </div>
                                    <div className="btn-group" role="group" aria-label="Third group">
                                        <button type="button" className="btn btn-secondary">8</button>
                                    </div>
                                </div>

                                <h6 className="card-subtitle mb-2 text-muted">Vertical button group</h6>
                                <div className="btn-toolbar">
                                    <div className="btn-group-vertical me-2" role="group" aria-label="Vertical button group">
                                        <button type="button" className="btn btn-primary">Button</button>
                                        <button type="button" className="btn btn-primary">Button</button>
                                        <button type="button" className="btn btn-primary">Button</button>
                                    </div>
                                    <div className="btn-group-vertical me-2" role="group" aria-label="Vertical button group">
                                        <button type="button" className="btn btn-success">Button</button>
                                        <button type="button" className="btn btn-success">Button</button>
                                        <button type="button" className="btn btn-success">Button</button>
                                    </div>
                                    <div className="btn-group-vertical me-2" role="group" aria-label="Vertical button group">
                                        <button type="button" className="btn btn-warning">Button</button>
                                        <button type="button" className="btn btn-warning">Button</button>
                                        <button type="button" className="btn btn-warning">Button</button>
                                    </div>
                                    <div className="btn-group-vertical me-2" role="group" aria-label="Vertical button group">
                                        <button type="button" className="btn btn-danger">Button</button>
                                        <button type="button" className="btn btn-danger">Button</button>
                                        <button type="button" className="btn btn-danger">Button</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>

        <footer className="footer">
            <div className="container-fluid">
                <div className="row text-muted">
                    <div className="col-6 text-start">
                        <p className="mb-0">
                            <a className="text-muted" href="https://adminkit.io/" target="_blank"><strong>AdminKit</strong></a> - <a className="text-muted" href="https://adminkit.io/" target="_blank"><strong>Bootstrap Admin Template</strong></a>								&copy;
                        </p>
                    </div>
                    <div className="col-6 text-end">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a className="text-muted" href="https://adminkit.io/" target="_blank">Support</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="text-muted" href="https://adminkit.io/" target="_blank">Help Center</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="text-muted" href="https://adminkit.io/" target="_blank">Privacy</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="text-muted" href="https://adminkit.io/" target="_blank">Terms</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</div>
  )
}

export default uibuttons