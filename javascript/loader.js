populate = () => {
  populate_jobs([
    {
      logo: 'images/msft-logo.png',
      company: 'Microsoft corporation',
      position: 'Junior Fullstack Engineer',
      time: '2015-2020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut etiam sit amet nisl purus in mollis. Nullam eget felis eget nunc lobortis mattis aliquam. Venenatis urna cursus eget nunc scelerisque viverra. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Risus in hendrerit gravida rutrum quisque non tellus orci ac. Proin fermentum leo vel orci porta non pulvinar neque. Purus sit amet luctus venenatis lectus. Molestie nunc non blandit massa enim nec dui nunc. Eleifend mi in nulla posuere sollicitudin. Venenatis urna cursus eget nunc scelerisque viverra. Augue mauris augue neque gravida in fermentum et sollicitudin ac. At tellus at urna condimentum mattis pellentesque.',
      Technologies: 'Computer Vision, Artificial Intelligence (AI), Connected Retail, Internet of Things, Hyperautomation, Blockchain, Quantum Computing, Mobile First, Voice - as - UI, Multiexperience'
    },
    {
      logo: 'images/msft-logo.png',
      company: 'Amazon AWS',
      position: 'Some other job',
      time: '2010-2015',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut etiam sit amet nisl purus in mollis. Nullam eget felis eget nunc lobortis mattis aliquam. Venenatis urna cursus eget nunc scelerisque viverra. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Risus in hendrerit gravida rutrum quisque non tellus orci ac. Proin fermentum leo vel orci porta non pulvinar neque. Purus sit amet luctus venenatis lectus. Molestie nunc non blandit massa enim nec dui nunc. Eleifend mi in nulla posuere sollicitudin. Venenatis urna cursus eget nunc scelerisque viverra. Augue mauris augue neque gravida in fermentum et sollicitudin ac. At tellus at urna condimentum mattis pellentesque.',
      Technologies: 'Computer Vision, Artificial Intelligence (AI), Connected Retail, Internet of Things, Hyperautomation, Blockchain, Quantum Computing, Mobile First, Voice - as - UI, Multiexperience'
    }

  ])
}

populate_jobs = (jobs_data) => {  
  const jobs = document.getElementById('jobs-description')   
  jobs_data.forEach(job_data => {
    const new_job = document.createElement('div')
    new_job.className = 'job'
    new_job.innerHTML = "<div class='job-logo'>                                        " +
      "<img class='company-logo' src="+ job_data.logo+"/>                              " +               
      "</div>                                                                          " +
      "<div class='job-description'>                                                   " +
      "  <div class='job-title'>                                                       " +
      "    <h3 class='company '>"+job_data.company+"</h3>                              " +      
      "    <h3 class='position '>"+job_data.position+"</h3>                            " +     
      "    <h3 class='time '>"+job_data.time+"</h3>                                    " +
      "  </div>                                                                        " +  
      "  <p class='collapsed large-collapse'>"+job_data.description +"</p>                                                                          " +                                         
      "  <div class='technologies'>                                                    " +                      
      "    <p class='collapsed small-collapse'>                                        " +                                  
      "      Technologies: "+job_data.technologies+"                                   " +                              
      "    </p>                                                                        " +                                                   
      "  </div>                                                                        " +                                                    
      "</div>                                                                          "                                              
    jobs.appendChild()
  });                       
}
