<h3>Comments:</h3>
<ul>
{map((recipe) =>
  <Comment
  date={recipe.comments.date}
  text={recipe.comments.text}
  name={recipe.comments.author.name} />

), recipe.comments}
</ul>


{
  compose(
  map((comment) =>
      <Comment
      date={comment.date}
      text={comment.text}
      name={comment.author.name} />),
  map(commentToObject)
)(recipe.comments)
}


<article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
  <div className="tc">
    <img src={props.imageUrl} className="br-200 h4 w4 dib ba b--black-05 pa2" title="night sky over water" />
    <h1 className="pa2 f5 tl f6-ns mv0">{props.title}</h1>
  </div>
  <p className="lh-copy measure center f6 black-70">{(props.rating)/20}
  </p>
</article>

http://mrmrs.io/photos/001.jpg

filter(recipe=> contains(props.control, recipe.categories))
filter(x=> contains(props.control, x.categories))
filter(r => intersection(r.categories, props.control).length > 0)


import React from 'react'
import { equals } from 'ramda'
import Panel from '../components/job-panel'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import InputField from '../components/input-field'
import RangeField from '../components/range-field'
import PayInput from '../components/payment-input'
import PhoneInput from '../components/phone-input'
import JobType from '../components/jobtype-input'
const moment = require('moment')


const postJob = (job) => {
   return fetch(`http://localhost:9000/jobs`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(job)
  })
}

const JobForm = (props) => {
  return (

    <div className="pa4">

    {/*JOB TYPE - PAGE 1*/}
    {equals(props.panel, 'step1') && (
    <Panel title='Job Type'
      onNext={e => props.next('step2')}
      progress={0}
      status="active"
    >
    <InputField label='Title'
      type="text"
      help='please provide a short one to two word descriptive name for your job'
      onChange={props.onChangeTitle}
    />

    <div className="f6 b db mb2">Job Type: {props.job.jobType}</div>
    <JobType
       onChange={props.onChangeJobType}
       value={props.job.jobType}
    />
    </Panel>
    )}

    {/* DATE AND TIME - PAGE 2*/}
    {equals(props.panel, 'step2') && (
    <Panel title='Date and Time'
      onNext={e => props.next('step3')}
      onPrevious={e => props.previous('step1')}
      progress={20}
      status="active"
    >
    <InputField label="Date"
      type="date"
      onChange={props.onChangeDate}
      min={moment().format('YYYY-MM-DD')}
    />
    <InputField label="Start Time"
      type="time"
      onChange={props.onChangeStartTime}
    />
    <InputField label="End Time"
      type="time"
      onChange={props.onChangeEndTime}
    />
    </Panel>
    )}

    {/* JOB DETAILS - PAGE 3 */}
    {equals(props.panel, 'step3') && (
    <Panel title='Job Details'
      onNext={e => props.next('step4')}
      onPrevious={e => props.previous('step2')}
      progress={40}
      status="active"
    >

    <RangeField label="People needed to complete job:"
      maxValue={20}
      minValue={0}
      value={props.job.persons}
      onChange={props.onChangePersons}

    />

    <div className="f6 b db mb2">Pay: ${props.job.paymentAmount}</div>
    <small className="measure black-60 f6 b db mb2">(How much each person will recieve upon completion of job)</small>
    <PayInput
      onChange={props.onChangePaymentAmount}
      value={props.job.paymentAmount}
    />

    <InputField label="Description:"
      type="textarea"
      help="Please list any additional important information, if the job is attended for mission trip fundraising please specify"
      onChange={props.onChangeDesc}
    />
    </Panel>
    )}

    {/* JOB LOCATION - PAGE 4 */}
    {equals(props.panel, 'step4') && (
    <Panel title="Location"
      onNext={e => props.next('step5')}
      onPrevious={e => props.previous('step3')}
      progress={60}
      status="active">
    <InputField label="Address"
      type="text"
      help="street address"
      onChange={props.onChangeAddress}
    />
    <InputField label="City"
      type="text"
      onChange={props.onChangeCity}
    />
    <InputField label="Zip"
      type="text"
      onChange={props.onChangeZip}
    />
    </Panel>
    )}

    {equals(props.panel, 'step5') && (
    <Panel title="Employer Contact Information"
      onNext={e => props.next('step6')}
      onPrevious={e => props.previous('step4')}
      progress={80}
      status="active">
      <InputField label="First Name"
        type="text"
        help="first name of employer"
        onChange={props.onChangeFirstName}
      />
      <InputField label="Last Name"
        type="text"
        help="last name of employer"
        onChange={props.onChangeLastName}
      />
      <PhoneInput label="Phone Number"
        value={props.job.phoneNum}
        onChange={props.onChangePhoneNum}
      />
      </Panel>
      )}

    {equals(props.panel, 'step6') && (
    <Panel
      onSubmit={props.submit(props.job, props.history)}
      onPrevious={e => props.previous('step5')}
      progress={100}
      status="success">
      <div className="f1 fw1 f-headline-m tc mt6">You're all done, press submit below to post your job!</div>
      </Panel>
    )}
    </div>
  )
}
const mapStateToProps = (state) => {
  return state
}
const mapActionsToProps = (dispatch) => {
  return {
    submit: (job, history) => (e) => {
      e.preventDefault()
      postJob(job)
        .then(job => job.json())
        .then(job => {
          if (job.id) {
            dispatch({type: 'CLEAR_BUZZWORD'})
            history.push('/jobs')
          } else {
            alert('Could not save to the database')
          }
        })
        .catch(err => console.log(err.message))
    },
    onChangeTitle: e => {
      dispatch({type: 'CHANGE_TITLE', payload: e.target.value})
    },
    onDateChange: e => {
      dispatch({type: 'CHANGE_DATE', payload: e.target.value})
    },
    onChangeDate: e => {
      dispatch({type: 'CHANGE_DATE', payload: e.target.value})
    },
    onChangeStartTime: e => {
      dispatch({type: 'CHANGE_ST', payload: e.target.value})
    },
    onChangeEndTime: e => {
      dispatch({type: 'CHANGE_ET', payload: e.target.value})
    },
    onChangePersons: value => {
      dispatch({type: 'CHANGE_PERS', payload: value})
    },
    onChangePaymentAmount: e => {
       dispatch({type: 'CHANGE_PAY', payload: e})
    },
    onChangeJobType: e => {
       dispatch({type: 'CHANGE_TYPE', payload: e})
    },
    onChangeDesc: e => {
      dispatch({type: 'CHANGE_DESC', payload: e.target.value})
    },
    onChangeAddress: e => {
      dispatch({type: 'CHANGE_ADR', payload: e.target.value})
    },
    onChangeCity: e => {
      dispatch({type: 'CHANGE_CITY', payload: e.target.value})
    },
    onChangeZip: e => {
      dispatch({type: 'CHANGE_ZIP', payload: e.target.value})
    },
    onChangeFirstName: e => {
      dispatch({type: 'CHANGE_FIRST', payload: e.target.value})
    },
    onChangeLastName: e => {
      dispatch({type: 'CHANGE_LAST', payload: e.target.value})
    },
    onChangePhoneNum: phone => {
      dispatch({type: 'CHANGE_PHONE', payload: phone})
    },
    next: panel => dispatch({ type: 'NEXT', payload: panel }),
    previous: panel => dispatch({ type: 'PREVIOUS', payload: panel })
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(JobForm)
