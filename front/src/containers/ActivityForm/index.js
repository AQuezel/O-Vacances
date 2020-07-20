import { connect } from 'react-redux';

import ActivityForm from 'src/components/ActivityForm';

import { updateActivityField } from 'src/actions/trip';

const mapStateToProps = (state) => ({
  activities: state.trip.trip.activities,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(updateActivityField(newValue, name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityForm);
