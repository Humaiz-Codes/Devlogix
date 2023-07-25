import React from 'react'

function Engagement() {
  return (
    <div className='engagement pt-2 pb-5 mt-5'>
        <h1 className='text-center '>Our Client Engagement Model</h1>
        <p className='text-center'>We believe that effective client engagement is the key to successful project delivery.</p> 
        <div className="container-fluid text-center">
  <div className="row">
    <div className="col-md-4">
      <h5 className='text-start'><img src="Assets/1.png" alt="1" />Collaboration</h5>
      <p className='text-start'>We work closely with our clients to understand their needs, goals, and challenges.
         We collaborate with them to develop a customized solution that meets their unique requirements.</p>
    </div>
    
    <div className="col-md-4 card2">
    <h5 className='text-start'><img src="Assets/2.png" alt="2" />Transparency</h5>
      <p className='text-start'>We believe in open and transparent communication with our clients.
       We keep our clients informed about the project status, milestones, and any issues that may arise.</p>
    </div>
    
    <div className="col-md-4 card2">
    <h5 className='text-start'><img src="Assets/3.png" alt="3" />Flexibility</h5>
      <p className='text-start'>We understand that every client is different, and we are flexible
       in our approach to project delivery.We adapt our engagement model to suit the specific 
       needs of each client.</p>
    </div>
  </div>
  
</div>
      
    </div>
  )
}

export default Engagement
