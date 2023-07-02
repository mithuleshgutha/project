import React from 'react'
import './pages.css';
import  InvoiceData from './InvoiceData';
import QuoteData from './QuoteData';
import OfferData from './OfferData';
import Piechart from './Piechart';
function Dashboard() {
  return (
    <>
      <div className='mx-5'>
        <div className='x d-flex justify-content-center'>Dashboard</div>
        <div className=''>
          <div className='p row '>
            <div className='invoice col col-md-5 col-lg col-sm-12 shadow'>
              <div className='text-center'>Invoice</div>
              <hr />
              <span>
                <span className='border-right px-2'>
                  this month
                </span>
                <span className='px-2'>money</span>
              </span>
            </div>
            <div className='invoice col col-md-5 col-lg col-sm-12 shadow'>
              <div className='text-center'>Invoice</div>
              <hr />
              <span>
                <span className='border-right px-2'>
                  this month
                </span>
                <span className='px-2'>money</span>
              </span>
            </div>
            <div className='invoice col col-md-5 col-lg col-sm-12 shadow'>
              <div className='text-center'>Invoice</div>
              <hr />
              <span>
                <span className='border-right px-2'>
                  this month
                </span>
                <span className='px-2'>money</span>
              </span>
            </div>
            <div className='invoice col col-md-5 col-lg col-sm-12 shadow'>
              <div className='text-center'>Invoice</div>
              <hr />
              <span>
                <span className='border-right px-2'>
                  this month
                </span>
                <span className='px-2'>money</span>
              </span>
            </div>
          </div>
        </div>
        {/* 2nd row */}
        <div className=''>
          <div className='p row mr-0'>
            <div className='invoice col col-md-10 col-lg col-sm-12 shadow'>
              <div className='k row p-3'>
                <div className='k col col-md-4 col-lg '>
                  <span className=''>Invoice Preview</span>
                  {InvoiceData.map((item) => {
                    return (<div className="skill-item">
                      <div className="skill-info">
                        <p>{item.name} <span className=''>{item.perc}</span></p>
                      </div>
                      <div className="progress-line" data-percent="90%">
                        <span style={{ width: item.perc }}></span>
                      </div>
                    </div>)
                  })}
                </div>
                <div className='k col col-md-4 col-lg '>
                  <span className=''>Invoice Preview</span>
                  {InvoiceData.map((item) => {
                    return (<div className="skill-item">
                      <div className="skill-info">
                        <p>{item.name} <span className='ro-2-perc'>{item.perc}</span></p>
                      </div>
                      <div className="progress-line" data-percent="90%">
                        <span style={{ width: item.perc }}></span>
                      </div>
                    </div>)
                  })}
                </div>
                <div className='k col col-md-4 col-lg '>
                  <span className=''>Invoice Preview</span>
                  {InvoiceData.map((item) => {
                    return (<div className="skill-item">
                      <div className="skill-info">
                        <p>{item.name} <span className='ro-2-perc'>{item.perc}</span></p>
                      </div>
                      <div className="progress-line" data-percent="90%">
                        <span style={{ width: item.perc }}></span>
                      </div>
                    </div>)
                  })}
                </div>

              </div>
            </div>

            <div className='customer-pre col col-md-10 col-lg-3 col-sm-12 shadow'>
              <div className='text-center pt-3'>Customer Preview</div>
              <hr /><br /> 
              <div><Piechart /></div>
              <div className='text-center'>New Customer this Month</div>
              <hr />
              <div className='text-center'>Active Customers</div>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='p row mr-0'>
            <div className='invoice col col-md-10 col-lg col-sm-12 shadow'>
              <div className='py-4'>Recent Invoice</div>
              
              
            </div>
            <div className='invoice col col-md-10 col-lg col-sm-12 shadow'>
              <div className='py-4'>Recent Quotes</div>
              
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Dashboard