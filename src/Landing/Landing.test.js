import React from 'react';
import { Landing } from './Landing';
import { shallow } from 'enzyme';

describe('Landing', () => {
  
  it('should match the snapshot rendered on page load', () => {
    const mockFilmData = { 
      films: [{
        opening_crawl: "Luke Skywalker has vanished.\r\nIn his absence, the sinister\r\nFIRST ORDER has risen from\r\nthe ashes of the Empire\r\nand will not rest until\r\nSkywalker, the last Jedi,\r\nhas been destroyed.\r\n \r\nWith the su…",
        release_date: "2015-12-11",
        title: "The Force Awakens"
      }]
    };
    const wrapper = shallow(
      <Landing 
        films ={ mockFilmData }
      />);

    expect(wrapper).toMatchSnapShot;
  });

});
