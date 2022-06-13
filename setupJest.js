jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
    useIsFocused: jest.fn(),
  };
});

jest.mock('react-native-responsive-screen', () => {
  return {
    heightPercentageToDP: jest.fn(),
    widthPercentageToDP: jest.fn(),
  };
});

jest.mock('react-native-vector-icons/FontAwesome', () => {
  return {
    __esModule: true,
    A: true,
    namedExport: jest.fn(),
    default: 'mockedDefaultExport',
  };
});

jest.mock('react-redux', () => {
  return {
    __esModule: true,
    A: true,
    useDispatch: jest.fn(() => {}),
    useSelector: jest.fn(),
    default: 'mockedDefaultExport',
  };
});
