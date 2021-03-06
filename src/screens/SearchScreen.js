import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');


  const[searchApi, results, errorMessage] = useResults()

   const filterHelper = (price) => {
    return results.filter(result =>{
      return result.price === price
    }
    ) 
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList  resultsList={filterHelper('$')} title={'Cost effective'} />
        <ResultsList resultsList={filterHelper('$$')} title={'Bit Pricier'} />
        <ResultsList  resultsList={filterHelper('$$$')} title={'Bit Spender'} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;