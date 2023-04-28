module.exports = [
  {
    key: 'pages',
    name: 'Pages',
    icon: 'ion-ios-paper-outline',
    child: [
      {
        key: 'other_page',
        name: 'หน้าแรก',
        title: true,
      },
      {
        key: 'blank',
        name: 'Blank Page',
        link: '/app',
        icon: 'ion-ios-document-outline',
      },
      {
        key: 'AddProject',
        name: 'เพิ่มโครงงาน',
        link: '/app/pages/AddProject',
        icon: 'ion-ios-home-outline',
      },
      {
        key: 'main_page',
        name: 'Sample Page',
        title: true,
      },
      {
        key: 'dashboard',
        name: 'Dashboard',
        link: '/app/pages/dashboard',
        icon: 'ion-ios-home-outline',
      },
      {
        key: 'form',
        name: 'Form',
        link: '/app/pages/form',
        icon: 'ion-ios-list-box-outline',
      },
      {
        key: 'table',
        name: 'Table',
        link: '/app/pages/table',
        icon: 'ion-ios-grid-outline',
      },
      {
        key: 'maintenance',
        name: 'Maintenance',
        link: '/maintenance',
        icon: 'ion-ios-build-outline'
      },
      {
        key: 'coming_soon',
        name: 'Coming Soon',
        link: '/coming-soon',
        icon: 'ion-ios-bonfire-outline'
      },
    ]
  },
  // BackOffice Menu
  {
    key: 'BackOffice',
    name: 'BackOffice',
    icon: 'ion-ios-square-outline',
    child: [
      {
        key: 'other_page',
        name: 'หน้าแรก',
        title: true,
      },
      {
        key: 'InsertProject',
        name: 'เพิ่มโปรเจค',
        link: '/app/BackOffice/InsertProject/InsertProject',
        icon: 'ion-ios-home-outline',
      },
      {
        key: 'DisplayPreproject',
        name: 'หัวข้อพรีโปรเจค',
        link: '/app/BackOffice/DisplayPreproject/DisplayPreproject',
        icon: 'ion-ios-home-outline',
      },
      {
        key: 'DisplayProject',
        name: 'หัวข้อโปรเจค',
        link: '/app/BackOffice/DisplayProject/DisplayProject',
        icon: 'ion-ios-home-outline',
      },
    ]
  },
  // General Menu
  {
    key: 'General',
    name: 'General',
    icon: 'ion-ios-globe-outline',
    child: [
      {
        key: 'other_page',
        name: 'หน้าแรก',
        title: true,
      },
      {
        key: 'SearchProject',
        name: 'ค้นหาโครงการ',
        link: '/app/General/SearchProject/SearchProject',
        icon: 'ion-ios-home-outline',
      },
      {
        key: 'PublicizeTeacher',
        name: 'ประชาสัมพันธ์อาจารย์',
        link: '/app/General/PublicizeTeacher/PublicizeTeacher',
        icon: 'ion-ios-home-outline',
      },
    ]
  },

];
