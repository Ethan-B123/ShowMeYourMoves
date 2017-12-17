import { TabNavigator } from 'react-navigation';
import AddSeekingForm from './add_seeking_form';
import AddHostingForm from './add_hosting_container';

export default TabNavigator({
  AddSeekingForm: {
    screen: AddSeekingForm,
    navigationOptions: {
      headerTitle: 'AddSeekingForm',
    },
  },
  AddHostingForm: {
    screen: AddHostingForm,
    navigationOptions: {
      headerTitle: 'AddHostingForm',
    },
  },
});
