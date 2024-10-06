import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Dashboard() {
  return (
    <AdminLayout>
        <>
        {/* <div className="row  border-bottom white-bg dashboard-header">

                <div className="col-md-3">
                    <h2>Welcome HRM</h2>
                    <small>...</small>
                    <ul className="list-group clear-list m-t">
                        <li className="list-group-item fist-item">
                            <span className="float-right">
                                09:00 pm
                            </span>
                            <span className="label label-success">1</span> Please contact me
                        </li>
                        <li className="list-group-item">
                            <span className="float-right">
                                10:16 am
                            </span>
                            <span className="label label-info">2</span> Sign a contract
                        </li>
                        <li className="list-group-item">
                            <span className="float-right">
                                08:22 pm
                            </span>
                            <span className="label label-primary">3</span> Open new shop
                        </li>
                        <li className="list-group-item">
                            <span className="float-right">
                                11:06 pm
                            </span>
                            <span className="label label-default">4</span> Call back to Sylvia
                        </li>
                        <li className="list-group-item">
                            <span className="float-right">
                                12:00 am
                            </span>
                            <span className="label label-primary">5</span> Write a letter to Sandra
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <div className="flot-chart dashboard-chart">
                        <div className="flot-chart-content" id="flot-dashboard-chart"></div>
                    </div>
                    <div className="row text-left">
                        <div className="col">
                            <div className=" m-l-md">
                            <span className="h5 font-bold m-t block">$ 406,100</span>
                            <small className="text-muted m-b block">Sales marketing report</small>
                            </div>
                        </div>
                        <div className="col">
                            <span className="h5 font-bold m-t block">$ 150,401</span>
                            <small className="text-muted m-b block">Annual sales revenue</small>
                        </div>
                        <div className="col">
                            <span className="h5 font-bold m-t block">$ 16,822</span>
                            <small className="text-muted m-b block">Half-year revenue margin</small>
                        </div>

                    </div>
                </div>
                <div className="col-md-3">
                    <div className="statistic-box">
                    <h4>
                        Project Beta progress
                    </h4>
                    <p>
                        You have two project with not compleated task.
                    </p>
                        <div className="row text-center">
                            <div className="col-lg-6">
                                <canvas id="doughnutChart2" width="80" height="80" style={{margin: "18px auto 0"}}></canvas>
                                <h5 >Kolter</h5>
                            </div>
                            <div className="col-lg-6">
                                <canvas id="doughnutChart" width="80" height="80" style={{margin: "18px auto 0"}}></canvas>
                                <h5 >Maxtor</h5>
                            </div>
                        </div>
                        <div className="m-t">
                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                        </div>

                    </div>
                </div>

        </div>
      <div className="row">
          <div className="col-lg-12">
              <div className="wrapper wrapper-content">
                      <div className="row">
                      <div className="col-lg-4">
                          <div className="ibox ">
                              <div className="ibox-title">
                                  <h5>New data for the report</h5> <span className="label label-primary">IN+</span>
                                  
                                </div>
                                     
                              </div>
                          <div className="ibox ">
                              
                              <div className="ibox-content no-padding">
                                  <ul className="list-group">
                                      <li className="list-group-item">
                                          <p><a className="text-info" href="#">@Alan Marry</a> I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                          <small className="block text-muted"><i className="fa fa-clock-o"></i> 1 minuts ago</small>
                                      </li>
                                      <li className="list-group-item">
                                          <p><a className="text-info" href="#">@Stock Man</a> Check this stock chart. This price is crazy! </p>
                                          <div className="text-center m">
                                              <span id="sparkline8"></span>
                                          </div>
                                          <small className="block text-muted"><i className="fa fa-clock-o"></i> 2 hours ago</small>
                                      </li>
                                      <li className="list-group-item">
                                          <p><a className="text-info" href="#">@Kevin Smith</a> Lorem ipsum unknown printer took a galley </p>
                                          <small className="block text-muted"><i className="fa fa-clock-o"></i> 2 minuts ago</small>
                                      </li>
                                      <li className="list-group-item ">
                                          <p><a className="text-info" href="#">@Jonathan Febrick</a> The standard chunk of Lorem Ipsum</p>
                                          <small className="block text-muted"><i className="fa fa-clock-o"></i> 1 hour ago</small>
                                      </li>
                                      <li className="list-group-item">
                                          <p><a className="text-info" href="#">@Alan Marry</a> I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                          <small className="block text-muted"><i className="fa fa-clock-o"></i> 1 minuts ago</small>
                                      </li>
                                      <li className="list-group-item">
                                          <p><a className="text-info" href="#">@Kevin Smith</a> Lorem ipsum unknown printer took a galley </p>
                                          <small className="block text-muted"><i className="fa fa-clock-o"></i> 2 minuts ago</small>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                          <div className="col-lg-4">
                              <div className="ibox ">
                                  <div className="ibox-title">
                                      <h5>Your daily feed</h5>
                                      <div className="ibox-tools">
                                          <span className="label label-warning-light float-right">10 Messages</span>
                                        </div>
                                  </div>
                                  <div className="ibox-content">

                                      <div>
                                          <div className="feed-activity-list">

                                              <div className="feed-element">
                                                  <a className="float-left" href="profile.html">
                                                      <img alt="image" className="rounded-circle" src="/assets/img/profile.jpg"/>
                                                  </a>
                                                  <div className="media-body ">
                                                      <small className="float-right">5m ago</small>
                                                      <strong>Monica Smith</strong> posted a new blog. <br/>
                                                      <small className="text-muted">Today 5:60 pm - 12.06.2014</small>

                                                  </div>
                                              </div>

                                              <div className="feed-element">
                                                  <a className="float-left" href="profile.html">
                                                      <img alt="image" className="rounded-circle" src="/assets/img/a2.jpg"/>
                                                  </a>
                                                  <div className="media-body ">
                                                      <small className="float-right">2h ago</small>
                                                      <strong>Mark Johnson</strong> posted message on <strong>Monica Smith</strong> site. <br/>
                                                      <small className="text-muted">Today 2:10 pm - 12.06.2014</small>
                                                  </div>
                                              </div>
                                              <div className="feed-element">
                                                  <a className="float-left" href="profile.html">
                                                      <img alt="image" className="rounded-circle" src="/assets/img/a3.jpg"/>
                                                  </a>
                                                  <div className="media-body ">
                                                      <small className="float-right">2h ago</small>
                                                      <strong>Janet Rosowski</strong> add 1 photo on <strong>Monica Smith</strong>. <br/>
                                                      <small className="text-muted">2 days ago at 8:30am</small>
                                                  </div>
                                              </div>
                                              <div className="feed-element">
                                                  <a className="float-left" href="profile.html">
                                                      <img alt="image" className="rounded-circle" src="/assets/img/a4.jpg"/>
                                                  </a>
                                                  <div className="media-body ">
                                                      <small className="float-right text-navy">5h ago</small>
                                                      <strong>Chris Johnatan Overtunk</strong> started following <strong>Monica Smith</strong>. <br/>
                                                      <small className="text-muted">Yesterday 1:21 pm - 11.06.2014</small>
                                                      <div className="actions">
                                                          <a href=""  className="btn btn-xs btn-white"><i className="fa fa-thumbs-up"></i> Like </a>
                                                          <a href=""  className="btn btn-xs btn-white"><i className="fa fa-heart"></i> Love</a>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="feed-element">
                                                  <a className="float-left" href="profile.html">
                                                      <img alt="image" className="rounded-circle" src="/assets/img/a5.jpg"/>
                                                  </a>
                                                  <div className="media-body ">
                                                      <small className="float-right">2h ago</small>
                                                      <strong>Kim Smith</strong> posted message on <strong>Monica Smith</strong> site. <br/>
                                                      <small className="text-muted">Yesterday 5:20 pm - 12.06.2014</small>
                                                      <div className="well">
                                                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                          Over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                                      </div>
                                                      <div className="float-right">
                                                          <a href=""  className="btn btn-xs btn-white"><i className="fa fa-thumbs-up"></i> Like </a>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="feed-element">
                                                  <a className="float-left" href="profile.html">
                                                      <img alt="image" className="rounded-circle" src="/assets/img/profile.jpg"/>
                                                  </a>
                                                  <div className="media-body ">
                                                      <small className="float-right">23h ago</small>
                                                      <strong>Monica Smith</strong> love <strong>Kim Smith</strong>. <br/>
                                                      <small className="text-muted">2 days ago at 2:30 am - 11.06.2014</small>
                                                  </div>
                                              </div>
                                              <div className="feed-element">
                                                  <a className="float-left" href="profile.html">
                                                      <img alt="image" className="rounded-circle" src="/assets/img/a7.jpg"/>
                                                  </a>
                                                  <div className="media-body ">
                                                      <small className="float-right">46h ago</small>
                                                      <strong>Mike Loreipsum</strong> started following <strong>Monica Smith</strong>. <br/>
                                                      <small className="text-muted">3 days ago at 7:58 pm - 10.06.2014</small>
                                                  </div>
                                              </div>
                                          </div>

                                          <button className="btn btn-primary btn-block m-t"><i className="fa fa-arrow-down"></i> Show More</button>

                                      </div>

                                  </div>
                              </div>

                          </div>
                      <div className="col-lg-4">
                          <div className="ibox ">
                              <div className="ibox-title">
                                  <h5>Alpha project</h5>
                                  <div className="ibox-tools">
                                      <a className="collapse-link" href="">
                                          <i className="fa fa-chevron-up"></i>
                                      </a>
                                      <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                          <i className="fa fa-wrench"></i>
                                      </a>
                                      <ul className="dropdown-menu dropdown-user">
                                          <li><a href="#" className="dropdown-item">Config option 1</a>
                                          </li>
                                          <li><a href="#" className="dropdown-item">Config option 2</a>
                                          </li>
                                      </ul>
                                      <a className="close-link" href="">
                                          <i className="fa fa-times"></i>
                                      </a>
                                  </div>
                              </div>
                              <div className="ibox-content ibox-heading">
                                  <h3>You have meeting today!</h3>
                                  <small><i className="fa fa-map-marker"></i> Meeting is on 6:00am. Check your schedule to see detail.</small>
                              </div>
                              <div className="ibox-content inspinia-timeline">

                                  <div className="timeline-item">
                                      <div className="row">
                                          <div className="col-4 date">
                                              <i className="fa fa-briefcase"></i>
                                              6:00 am
                                              <br/>
                                              <small className="text-navy">2 hour ago</small>
                                          </div>
                                          <div className="col content no-top-border">
                                              <p className="m-b-xs"><strong>Meeting</strong></p>

                                              <p>Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the
                                                  sale.</p>
                                            </div>
                                      </div>
                                  </div>
                                  <div className="timeline-item">
                                      <div className="row">
                                          <div className="col-4 date">
                                              <i className="fa fa-file"></i>
                                              7:00 am
                                              <br/>
                                              <small className="text-navy">3 hour ago</small>
                                          </div>
                                          <div className="col content">
                                              <p className="m-b-xs"><strong>Send documents to Mike</strong></p>
                                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="timeline-item">
                                      <div className="row">
                                          <div className="col-4 date">
                                              <i className="fa fa-coffee"></i>
                                              8:00 am
                                              <br/>
                                          </div>
                                          <div className="col content">
                                              <p className="m-b-xs"><strong>Coffee Break</strong></p>
                                              <p>
                                                  Go to shop and find some products.
                                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="timeline-item">
                                      <div className="row">
                                          <div className="col-4 date">
                                              <i className="fa fa-phone"></i>
                                              11:00 am
                                              <br/>
                                              <small className="text-navy">21 hour ago</small>
                                          </div>
                                          <div className="col content">
                                              <p className="m-b-xs"><strong>Phone with Jeronimo</strong></p>
                                              <p>
                                                  Lorem Ipsum has been the industry's standard dummy text ever since.
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="timeline-item">
                                      <div className="row">
                                          <div className="col-4 date">
                                              <i className="fa fa-user-md"></i>
                                              09:00 pm
                                              <br/>
                                              <small>21 hour ago</small>
                                          </div>
                                          <div className="col content">
                                              <p className="m-b-xs"><strong>Go to the doctor dr Smith</strong></p>
                                              <p>
                                                  Find some issue and go to doctor.
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="timeline-item">
                                      <div className="row">
                                          <div className="col-4 date">
                                              <i className="fa fa-comments"></i>
                                              12:50 pm
                                              <br/>
                                              <small className="text-navy">48 hour ago</small>
                                          </div>
                                          <div className="col content">
                                              <p className="m-b-xs"><strong>Chat with Monica and Sandra</strong></p>
                                              <p>
                                                  Web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                              </p>
                                          </div>
                                      </div>
                                  </div>

                              </div>
                          </div>
                      </div>

                      </div>
              </div>

          </div>
      </div> */}

{/* <div class="container-xxl flex-grow-1 container-p-y">
              
              <div class="row">
                  <div class="col-lg-12 mb-4 order-0">
                    <div class="card">
                      <div class="d-flex align-items-end row">
                        <div class="col-sm-7">
                          <div class="card-body">
                            <h2 class="card-title text-primary">Welcome To Medicine Store!</h2>
                            <p class="mb-4">
                              <span class="fw-medium"></span> 
                            </p>
                          </div>
                        </div>
                        <div class="col-sm-5 text-center text-sm-left">
                          <div class="card-body pb-0 px-0 px-md-4">
                            <img
                              src="<?= $baseurl ?>/assets/img/illustrations/medicine.png"
                              height="250"
                              alt="View Badge User"
                               />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                  <div class="row">
  
                  <div class="col-lg-3  order-0">
                    <div class="card">
                      <div class="d-flex align-items-end row">
                          <div class="card-body text-center">
                            <h1><i class="menu-icon bi bi-person-workspace"></i></h1>
                            <a href="supplier_add.php"><h5 class="card-title text-center">Suppliers</h5></a> 
                          </div>
                        </div>
                      </div>
                    </div>
                  <div class="col-lg-3  order-0">
                    <div class="card">
                      <div class="d-flex align-items-end row">
                          <div class="card-body text-center">
                            <h1><i class="menu-icon bi bi-person-plus-fill"></i></h1>
                            <a href="customer_add.php"><h5 class="card-title text-center">Customer</h5></a> 
                          </div>
                        </div>
                      </div>
                    </div>
                  <div class="col-lg-3  order-0">
                    <div class="card">
                      <div class="d-flex align-items-end row">
                          <div class="card-body text-center">
                            <h1><i class="menu-icon bi bi-capsule"></i></h1>
                            <a href="medicine_add.php"><h5 class="card-title text-center">Medicine</h5></a> 
                          </div>
                        </div>
                      </div>
                    </div>
                  <div class="col-lg-3  order-0">
                    <div class="card">
                      <div class="d-flex align-items-end row">
                          <div class="card-body text-center">
                            <h1><i class="menu-icon bi bi-bag-fill"></i></i></h1>
                            <a href="purchase_add.php"><h5 class="card-title text-center">Purchase</h5></a> 
                          </div>
                        </div>
                      </div>
                    </div>
                  
            
                  </div>
  
  
                  <div class="row mt-5">
  
                  <div class="col-lg-3  order-0">
                    <div class="card">
                      <div class="d-flex align-items-end row">
                          <div class="card-body text-center">
                            <h1><i class="menu-icon bi bi-cart3"></i></h1>
                            <a href="sales_add.php"><h5 class="card-title text-center">Sales</h5></a> 
                          </div>
                        </div>
                      </div>
                    </div>
                  
                  <div class="col-lg-3  order-0">
                    <div class="card">
                      <div class="d-flex align-items-end row">
                          <div class="card-body text-center">
                            <h1><i class="menu-icon bi bi-bag-fill"></i></h1>
                            <a href="purchase_return.php"><h5 class="card-title text-center">Purchase Return</h5></a> 
                          </div>
                        </div>
                      </div>
                    </div>
                  <div class="col-lg-3  order-0">
                    <div class="card">
                      <div class="d-flex align-items-end row">
                          <div class="card-body text-center">
                            <h1><i class="menu-icon bi bi-cart3"></i></h1>
                            <a href="sales_return.php"><h5 class="card-title text-center">Sales Return</h5></a> 
                          </div>
                        </div>
                      </div>
                    </div>
                  
                  <div class="col-lg-3  order-0">
                    <div class="card">
                      <div class="d-flex align-items-end row">
                          <div class="card-body text-center">
                            <h1><i class="menu-icon bi bi-journal-medical"></i></h1>
                            <a href="stock_list.php"><h5 class="card-title text-center">Report</h5></a> 
                          </div>
                        </div>
                      </div>
                    </div>
            
                  </div>
                  
                
                  <div class="row mt-5">
  
                  <div class="col-lg-3  order-0">
                      <div class="card">
                      <div class="d-flex align-items-end row">
                          <div class="card-body text-center">
                            <h1><i class="menu-icon bi-tags-fill"></i></h1>
                            <a href="coupon_add.php"><h5 class="card-title text-center">Coupon</h5></a> 
                          </div>
                        </div>
                      </div>
                    </div>
                  <div class="col-lg-3  order-0">
                      <div class="card">
                      <div class="d-flex align-items-end row">
                          <div class="card-body text-center">
                            <h1><i class="menu-icon bi bi-bag-heart"></i></h1>
                            <a href="orders_list.php"><h5 class="card-title text-center">Orders</h5></a> 
                          </div>
                        </div>
                      </div>
                    </div>
                  <div class="col-lg-3  order-0">
                    <div class="card">
                      <div class="d-flex align-items-end row">
                          <div class="card-body text-center">
                            <h1><i class="menu-icon bi bi-person-arms-up"></i></h1>
                            <a href="user_add.php"><h5 class="card-title text-center">Users</h5></a> 
                          </div>
                        </div>
                      </div>
                    </div>
                  <div class="col-lg-3  order-0">
                    <div class="card">
                      <div class="d-flex align-items-end row">
                          <div class="card-body text-center">
                            <h1><i class="menu-icon bi bi-prescription2"></i></h1>
                            <a href="type_add.php"><h5 class="card-title text-center">Medicine Type</h5></a> 
                          </div>
                        </div>
                      </div>
                    </div>
                  <div class="col-lg-3  order-0">
                    
                    </div>
            
                  </div> */}
                
                
  
  
         
          
   
        </>
    </AdminLayout>       
  )
}

export default Dashboard