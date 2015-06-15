(function() {
'use strict';

angular.module('johoApp.core')
  .config(configureIcons);

/* @ngInject */
function configureIcons($mdIconProvider) {
  $mdIconProvider

    // Menu Icons
    .icon('face',           'assets/icons/md/face.svg'    )
    .icon('code',           'assets/icons/md/code.svg'    )
    .icon('school',         'assets/icons/md/school.svg'  )
    .icon('phone',          'assets/icons/md/phone.svg'   )
    .icon('work',           'assets/icons/md/work.svg'    )
    .icon('home',           'assets/icons/md/home.svg'    )
    .icon('mail',           'assets/icons/md/mail.svg'    )

    // Navigation Icons
    .icon('menu-vert',      'assets/icons/md/menu-vert.svg')
    .icon('menu-hori',      'assets/icons/md/menu-hori.svg')
    .icon('menu-bars',      'assets/icons/md/menu-bars.svg')
    .icon('menu-grid',      'assets/icons/md/menu-grid.svg')

    // Directional Icons
    .icon('arrow-left',     'assets/icons/md/arrow-left.svg'    )
    .icon('arrow-right',    'assets/icons/md/arrow-right.svg'   )
    .icon('chevron-left',   'assets/icons/md/chevron-left.svg'  )
    .icon('chevron-right',  'assets/icons/md/chevron-right.svg' )

    // Cloud Storage Icons
    .icon('gdrive',         'assets/icons/dl/drive_icon_48px.svg'   )
    .icon('dropbox',        'assets/icons/dl/dropbox_icon_48px.svg' )
    .icon('onedrive',       'assets/icons/dl/onedrive_icon_48px.svg')

    // Profile/Social Media
    .icon('github',         'assets/icons/fa/github.svg'    )
    .icon('linkedin',       'assets/icons/fa/linkedin.svg'  )
    .icon('codepen',        'assets/icons/fa/codepen.svg'   )
    .icon('angellist',      'assets/icons/fa/angellist.svg' );

}

})();
