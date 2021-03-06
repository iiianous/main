import React from 'react';
const SkillsViewBlock = (props) => {
  const profile = props.profile;
  let date_memberSince = Date.now();
  if (profile) {
    date_memberSince = new Date(profile.memberSince);
  }
  if (!profile) {
    return <div>Loading...</div>;
  }

  const skillsbadges2 = (skills) => {
    if (skills) {
      let fsix = skills;

      return fsix.map((skl, i) => (
        <div className='profile-skills' key={i}>
          {skl}
        </div>
      ));
    }
  };

  const skillSection = (
    <div className='profile-badge-categories'>
      {skillsbadges2(profile.skills)}
    </div>
  );

  return (
    <div className='card card-body redeem-points mb-2'>
      <div className='redeem-heading'>Skills</div>
      <br />
      {skillSection}
    </div>
  );
};

export default SkillsViewBlock;
