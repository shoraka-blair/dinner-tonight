import React from 'react'
import { equals } from 'ramda'

const CuisineControl = props => {
  return (
    <div>
      <h3 className='orange'>Select Cuisine: {props.cuisineControl}</h3>
      <div className='cf'>
        <div
          className={`fl w-25 pointer`}
          onClick={e => props.onChange('american')}
        >
          <div
            className={
              `mr1 pa2 ba tc br1 ${equals(props.value, 'american') &&
                'bg-light-silver white b--orange'}`
            }
          >
            <img src='/images/burger-fries.jpg' />
            <span className='dn db-ns'>American</span>
          </div>
        </div>
        <div
          className={`fl w-25 pointer`}
          onClick={e => props.onChange('italian')}
        >
          <div
            className={
              `mr1 pa2 ba tc br1 ${equals(props.value, 'italian') &&
                'bg-light-silver white b--orange'}`
            }
          >
            <img src='/images/italian.jpg' />
            <span className='dn db-ns'>Italian</span>
          </div>
        </div>
        <div
          className={`fl w-25 pointer`}
          onClick={e => props.onChange('chinese')}
        >
          <div
            className={
              `mr1 pa2 ba tc br1 ${equals(props.value, 'chinese') &&
                'bg-light-silver white b--orange'}`
            }
          >
            <img src='/images/chinese1.jpg' />
            <span className='dn db-ns'>Chinese</span>
          </div>
        </div>
        <div
          className={`fl w-25 pointer`}
          onClick={e => props.onChange('cuban')}
        >
          <div
            className={
              `mr1 pa2 ba tc br1 ${equals(props.value, 'cuban') &&
                'bg-light-silver white b--orange'}`
            }
          >
            <img src='/images/cuban.jpg' />
            <span className='dn db-ns'>Cuban</span>
          </div>
        </div>
        <p className='f6 fs-italic'>(click on cuisine)</p>
      </div>
    </div>
  )
}

// NOTE: include attribution for cuban image in about section
// https://www.flickr.com/photos/frankfarm/252102667/in/photolist-oh6kH-iSz8N-rra8VM-3Htoa2-9gpkuH-oh64k-5hABqb-3hHJnD-7geHdW-ioHP4d-8pZEpc-4i9oVn-bzEGtM-6Z3WLk-baaLVp-ioHS4n-a5tw6-bzEF8B-3cxAH9-6aePKj-ioHT6T-ioHWFs-5hB7x7-74vbMx-deE3Kv-yor4c-5CVnM6-4i9oJi-kvLYm-5mXppk-7kEjtf-ioHLTJ-4csXtU-ioJsTa-4djVJ8-6fAxQ4-4jdsbx-5G7Ymd-7iPShy-3jjqS9-ioHPQe-ioHM7D-ioJzpB-4NDAhB-4jdsbr-6ksBgy-4wRHBH-4wVSrf-NWzgxq-xDycV
CuisineControl.propTypes = {
  value: React.PropTypes.string,
  onChange: React.PropTypes.func
}

export default CuisineControl
