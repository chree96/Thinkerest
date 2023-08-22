import React from 'react';
import PillButton from '../../components/atoms/pill-button';
import {
  ContentGenre,
  ContentSearchSections,
  ContentType,
} from '../../types/content';

export const getSectionTitle = (
  section: ContentSearchSections,
  genre?: ContentGenre,
) => {
  switch (section) {
    case ContentSearchSections.GENRE:
      switch (genre) {
        case ContentGenre.ACTION:
          return 'Azione alle stelle';
        case ContentGenre.ROMANTIC:
          return 'Romantico da far schifo';
        case ContentGenre.ADVENTURE:
          return "All'arrembaggio!";
      }
      return 'Per genere';
    case ContentSearchSections.TOP_RATED:
      return 'Top rated movies';
    case ContentSearchSections.RECOMMENDED:
      return 'Consigliati';
    default:
      return '';
  }
};

export const getGenreButtons = (
  contentType: ContentType,
  contentColor: string,
) => {
  const buttons: any = [];
  Object.keys(ContentGenre).forEach(genre => {
    let text = '';
    let icon = '';

    switch (genre) {
      case ContentGenre.ACTION:
        text = 'Azione';
        icon = 'tvSeries';
        break;
      case ContentGenre.ADVENTURE:
        text = 'Avventura';
        icon = 'movies';
        break;
      case ContentGenre.ROMANTIC:
        text = 'Romantico';
        icon = 'lens';
        break;
    }

    buttons.push(
      <PillButton
        key={'pill-button-' + genre}
        text={text}
        iconName={icon}
        iconSize={20}
        color={contentColor}
        contentType={contentType}
        onPress={() => console.log('pressed')}
      />,
    );
  });

  return buttons;
};
