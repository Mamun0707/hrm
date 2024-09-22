import React from 'react'
import AdminLayout from '../../../layouts/AdminLayout'

function Terminations() {
  return (
    <AdminLayout>
        <>
        <div id="wrapper">

    <nav className="navbar-default navbar-static-side" role="navigation">
        <div className="sidebar-collapse">
            

        </div>
    </nav>

        <div id="wrapper" className="gray-bg">
        <div className="row border-bottom">
        <nav className="navbar navbar-static-top" role="navigation" style={{marginBottom: "0"}}>
     


        </nav>
        </div>
            <div className="row wrapper border-bottom white-bg page-heading">
                <div className="col-lg-10">
                    <h2>Terminations</h2>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a>Forms</a>
                        </li>
                        <li className="breadcrumb-item active">
                            <strong>PDF viewer</strong>
                        </li>
                    </ol>
                </div>
                <div className="col-lg-2">

                </div>
            </div>
        <div className="wrapper wrapper-content animated fadeIn">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ibox">
                        <div className="ibox-content border-sbottom">
                            <h4>PDF.js</h4>
                            <p>
                                PDF.js is a Portable Document Format (PDF) viewer that is built with HTML5.
                                PDF.js is community-driven and supported by Mozilla Labs. The goal is to create a general-purpose, web standards-based platform for parsing and rendering PDFs.
                                 Full documentation: <a href="https://github.com/mozilla/pdf.js" target="_blank">https://github.com/mozilla/pdf.js</a>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
                    <div className="text-center pdf-toolbar">

                            <div className="btn-group">
                                <button id="prev" className="btn btn-white"><i className="fa fa-long-arrow-left"></i> <span className="d-none d-sm-inline">Previous</span></button>
                                <button id="next" className="btn btn-white"><i className="fa fa-long-arrow-right"></i> <span className="d-none d-sm-inline">Next</span></button>
                                <button id="zoomin" className="btn btn-white"><i className="fa fa-search-minus"></i> <span className="d-none d-sm-inline">Zoom In</span></button>
                                <button id="zoomout" className="btn btn-white"><i className="fa fa-search-plus"></i> <span className="d-none d-sm-inline">Zoom Out</span> </button>
                                <button id="zoomfit" className="btn btn-white"> 100%</button>
                                <span className="btn btn-white hidden-xs">Page: </span>

                            <div className="input-group">
                                <input type="text" className="form-control" id="page_num"/>

                                <div className="input-group-append">
                                    <button type="button" className="btn btn-white" id="page_count">/ 22</button>
                                </div>
                            </div>

                                </div>
                        </div>







            <div className="text-center m-t-md">
                <canvas id="the-canvas" className="pdfcanvas border-left-right border-top-bottom b-r-md"></canvas>
            </div>



        </div>

            <div className="footer">
                <div className="float-right">
                    10GB of <strong>250GB</strong> Free.
                </div>
                <div>
                    <strong>Copyright</strong> Example Company &copy; 2014-2018
                </div>
            </div>
        </div>
        </div>
        </>
    </AdminLayout>       
  )
}

export default Terminations