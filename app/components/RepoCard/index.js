import React, { memo } from 'react';
import { Card, CardItem, Text, Icon, Left } from 'native-base';
import { TouchableOpacity } from 'react-native';

const RepoCard = memo(
({
  repo,
  navigation
}) => {
  const _onPress = () => {
    navigation.navigate(
      "Users",
      { projectName: repo.name, stargazersUrl: repo.stargazersUrl }
    );
  }

  return (
    <Card style={{ backgroundColor: '#12161C' }}>
      <CardItem>
        <Text>{repo.name}</Text>
      </CardItem>
      <CardItem>
        <Left>
          <Text>{repo.language ?? 'No Language'}</Text>
        </Left>
        <Icon name="star" style={{ color: 'orange' }}/>
        <TouchableOpacity onPress={_onPress}>
          <Text>{repo.stagazersCount}</Text>
        </TouchableOpacity>
      </CardItem>
    </Card>
  )
})

export default RepoCard;
