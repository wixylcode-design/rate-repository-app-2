import {View,Text,Image,StyleSheet} from "react-native"

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
    flexDirection: "row",
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 16,
  },

  info: {
    flex: 1,
  },

  fullName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },

  description: {
    color: "#555",
    marginBottom: 8,
  },

  language: {
    alignSelf: "flex-start",
    backgroundColor: "#0366d6",
    color: "white",
    padding: 6,
    borderRadius: 4,
    marginBottom: 12,
  },

  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  stat: {
    alignItems: "center",
  },

  number: {
    fontWeight: "bold",
    fontSize: 16,
  },
});


const formatCount = (count) => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }

  return count.toString();
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>

      {/* Avatar */}
      <Image
        style={styles.avatar}
        source={{ uri: item.ownerAvatarUrl }}
      />

      {/* Repository information */}
      <View style={styles.info}>
        <Text style={styles.fullName}>
          {item.fullName}
        </Text>

        <Text style={styles.description}>
          {item.description}
        </Text>

        <Text style={styles.language}>
          {item.language}
        </Text>

        {/* Statistics */}
        <View style={styles.stats}>

          <View style={styles.stat}>
            <Text style={styles.number}>
              {formatCount(item.stargazersCount)}
            </Text>
            <Text>Stars</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.number}>
              {formatCount(item.forksCount)}
            </Text>
            <Text>Forks</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.number}>
              {formatCount(item.reviewCount)}
            </Text>
            <Text>Reviews</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.number}>
              {item.ratingAverage}
            </Text>
            <Text>Rating</Text>
          </View>

        </View>
      </View>

    </View>
  );
};
export default RepositoryItem