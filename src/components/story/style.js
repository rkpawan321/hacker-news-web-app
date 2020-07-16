const useStyles = () => ({
  landingPageContainer: {
    marginTop: "110px",
    height: '100%',
    backgroundColor: '#222222',
    // backgroundColor: 'red',
    // overflowY: 'hidden',
    // marginLeft: '70px',
    // width    : '100vw',

    padding: '20px',
  },
  

  title1Container: {
    background: 'white',
    paddingTop: '16px',
    paddingLeft: '20px',
    paddingBottom: '24px',
    position: 'fixed',
  },
  title1: {
    fontFamily: 'Manrope-Bold',
    fontSize: '16px',
    color: '#000000',
  },
  languageList: {
    marginTop: '64px',
    marginLeft: '20px',
    marginRight: '20px',
    marginBottom: '100px',
  },
  languageTile: {
    height: '55px',
    borderRadius: '5px',
    backgroundColor: '#e5eaf9',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    paddingLeft: '20px',
    cursor: 'pointer',
  },
  languageName: {
    fontSize: '16px'
  },
  landingImageContainer: {
    paddingTop: '26px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    height: '500px',
  },
  landingIcon: {
    width: '312px',
    height: '250px',
    objectFit: 'contain',
  },
  title2: {
    fontFamily: 'Manrope-Bold',
    fontSize: '22px',
    color: ' #0033cc',
    marginTop: '47px',
  },
  title3: {
    fontFamily: 'Manrope-Regular',
    fontSize: '16px',
    color: ' #000000',
    marginTop: '6px',
  },
  paginationBox : {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
  },
  loadMoreButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#222222',
  },
  buttonText: {
    color: '#ffffff',
    textTransform: 'capitalize',
  }
});

export default useStyles;