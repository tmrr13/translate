import React, {useEffect, useRef, useState} from 'react';
import { MemoInput } from '../memo-input/MemoInput';
import {MemoList} from '../memo-list/MemoList';
import axios from 'axios';
import firebase from 'firebase/compat';

// type MemoItem = {
//   origin: string;
//   translation: string;
// }
//
// [['sky', 'небо']]
export const Notebook = () => {
  // const exs = {sky: 'небо', water: 'вода'};
  //
  // const foo = ([key,value]) => {
  //   console.log(key, value);
  // }

  // Object.entries(exs).forEach(foo)
  const [arrCollectionWords, setArrCollectionWords] = useState(() => {
    const collectionWordsLocalStorage = localStorage.getItem("collectionWords")
    return collectionWordsLocalStorage ? JSON.parse(collectionWordsLocalStorage) : [];
  });

  const container = useRef<HTMLDivElement>(null);
  const [inputText, setInputText] = useState('like');
  const [detectLanguageKey, setdetectedLanguageKey] = useState('');
  const [selectedLanguageKey, setLanguageKey] = useState('')
  const [languagesList, setLanguagesList] = useState([])
  const [resultText, setResultText] = useState('');

  const getLanguageSource = () => {
    axios.post(`https://libretranslate.de/detect`, {
      q: inputText
    })
      .then((response) => {
        setdetectedLanguageKey(response.data[0].language)
      })
  }
  useEffect(() => {
    axios.get(`https://libretranslate.de/languages`)
      .then((response) => {
        setLanguagesList(response.data)
      })

    getLanguageSource()
  }, [inputText])

  // const languageKey = (selectedLanguage) => {
  //   setLanguageKey(selectedLanguage.target.value)
  // }

  const translateText = (value: string) => {
    getLanguageSource();

    let data = {
      q : value,
      source: detectLanguageKey,
      target: selectedLanguageKey
    }
    axios.post(`https://libretranslate.de/translate`, data)
      .then((response) => {
        setResultText(response.data.translatedText)
      })
  }


  const setLocalStorage = (items: string) => {
    localStorage.setItem('collectionWords', JSON.stringify([...arrCollectionWords, items]))
    // firebase.database('')
  }

  const saveWord = (word: string) => {
    // if (!arrCollectionWords.includes(word)) {
      setArrCollectionWords((item: Array<string>) => {
        return [...item, word]
      });
      setLocalStorage(word);
      translateText(word);
      setInputText(word);
    // }

  }
  console.log(resultText);
  return (
    <div ref={container}>
      <div>
        <MemoList collectionWords={arrCollectionWords}/>
        <MemoInput onClick={saveWord} />
      </div>

      {/*<select className="language-select" onChange={languageKey}>*/}
      {/*  <option>Please Select Language..</option>*/}
      {/*  {languagesList.map((language) => {*/}
      {/*    return (*/}
      {/*      <option value={language.code}>*/}
      {/*        {language.name}*/}
      {/*      </option>*/}
      {/*    )*/}
      {/*  })}*/}
      {/*</select>*/}
    </div>
  )
}
