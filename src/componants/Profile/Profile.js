import "./Profile.css";

function Profile() {
  return (
    
      <div className="profile_skills">
        <div className="container">
              <div className="profile">
                <h2 className="profile-title">
                  <span>My </span>Profile
                </h2>
                <ul className="profile-list">
                  <li className="profile-item">
                    <span>Name</span>
                    Mohamed Eid
                  </li>
                  <li className="profile-item">
                    <span>Birthday</span>
                    21/3/1998
                  </li>
                  <li className="profile-item">
                    <span>Address</span>
                    Nasr City
                  </li>
                  <li className="profile-item">
                    <span>Phone</span>
                    01120497811
                  </li>
                  <li className="profile-item">
                    <span>Email</span>
                    mohamed3idm68@gmail.com
                  </li>
                  <li className="profile-item">
                    <span>Website</span>
                    <span className="web">www.google.com</span>
                  </li>
                </ul>
              </div>
              <div class="skills">
                    <h2 class="skills-title">Some <span>skills</span></h2>
                    <p class="skills-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </p>
                    <div class="bar">
                        <span class="title">Bootstrap</span>
                        <span class="perc">100%</span>
                        <div class="parent">
                            <span class="sp1"></span>
                        </div>
                    </div>
                    
                    <div class="bar">
                        <span class="title">CSS3</span>
                        <span class="perc">90%</span>
                        <div class="parent">
                            <span class="sp2"></span>
                        </div>
                    </div>
                    
                    <div class="bar">
                        <span class="title">Photoshop</span>
                        <span class="perc">80%</span>
                        <div class="parent">
                            <span class="sp3"></span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    
      
  
  );
}

export default Profile;
