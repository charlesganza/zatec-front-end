import React from 'react';
import PeopleTable from './PeopleTable';
import NoPeopleFound from './NoPeopleFound';

const PeopleItem = ({people, showHeader}) => {

  return (
    <div>
      {
        people.length > 0 ? <PeopleTable people = {people} showHeader={showHeader} /> : <NoPeopleFound/>
      }
    </div>
  );
}

export default PeopleItem;
