import { ConfigProvider } from "antd";
import { Icon } from "@iconify/react";
import ProfileInputFilter from "../../ui/Profile/ProfileInputFilter.jsx";
import { useGetAllGames } from "../../hooks/library/useGetAllGames.js";
import CollapseLibrary from "../../ui/Profile/CollapseLibrary.jsx";
import ProfileGameItem from "../../ui/Profile/ProfileGameItem.jsx";
import { Spinner } from "../../ui/Loading/Spinner.jsx";
import { useState } from "react";
import { generalError, successNotify } from "../../helpers/toaster/toast.js";
import { useGetUser } from "../../hooks/authentication/useGetUser.js";
import { useQueryClient } from "@tanstack/react-query";
import { useDeleteGame } from "../../hooks/library/useDeleteGame.js";

const list = [
  {
    title: "Uncategorized",
    icon: <Icon icon="fa-solid:dice-d20" className="text-2xl" />,
    status: "uncategorized",
  },
  {
    title: "Not played",
    icon: <Icon icon="subway:mark-4" className="text-2xl" />,
    status: "not_played",
  },
  {
    title: "Played",
    icon: <Icon icon="subway:mark-3" className="text-2xl" />,
    status: "played",
  },
  {
    title: "Currently playing",
    icon: <Icon icon="vaadin:gamepad" className="text-2xl" />,
    status: "currently_playing",
  },
  {
    title: "Completed",
    icon: <Icon icon="bi:trophy-fill" className="text-2xl" />,
    status: "completed",
  },
];

const Library = () => {
  const { games, gamesLoading } = useGetAllGames();
  const [query, setQuery] = useState("");
  const { data: user } = useGetUser();
  const queryClient = useQueryClient();
  const { deleteMutate, deleteLoading } = useDeleteGame();

  let filteredGames = games;

  if (filteredGames && query.length > 0) {
    filteredGames = filteredGames.filter((game) =>
      game.name.toLowerCase().includes(query.toLowerCase()),
    );
  }

  const categoryCounts = {};

  list.forEach((item) => {
    const categoryCount = filteredGames?.filter((game) => {
      return item.status === "uncategorized"
        ? game.status === "uncategorized"
        : game.status === item.status;
    }).length;

    categoryCounts[item.status] = categoryCount;
  });

  const handleDeleteLibrary = (name) => {
    deleteMutate(
      {
        name,
        userId: user?.id,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["games"]);
          successNotify(`You have removed ${name} from your library`);
        },
        onError: (err) => {
          generalError(err.message);
        },
      },
    );
  };

  return (
    <div className="px-1">
      <ProfileInputFilter
        placeholder="Search my library"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ConfigProvider
        theme={{
          components: {
            Collapse: {
              colorBgContainer: "transparent",
              colorText: "rgb(114, 114, 114)",
              colorTextHeading: "rgb(114, 114, 114)",
              padding: 0,
            },
          },
        }}
      >
        {!gamesLoading ? (
          <>
            {list.map((item, i) => (
              <CollapseLibrary
                key={i}
                title={item.title}
                icon={item.icon}
                categoryCounts={categoryCounts[item.status]}
              >
                {filteredGames
                  ?.filter((game) => {
                    return item.status === "uncategorized"
                      ? game.status === "uncategorized"
                      : game.status === item.status;
                  })
                  .map((filteredGame, i) => (
                    <ProfileGameItem
                      id={filteredGame.id}
                      key={i}
                      image={filteredGame.image}
                      platform={filteredGame.platforms?.map(
                        (game) => game.platform?.name,
                      )}
                      meta={filteredGame.meta}
                      name={filteredGame.name}
                      added={filteredGame.added}
                      handleDeleteGame={() =>
                        handleDeleteLibrary(filteredGame.name)
                      }
                      libraryLoading={deleteLoading}
                    />
                  ))}
              </CollapseLibrary>
            ))}
          </>
        ) : (
          <Spinner />
        )}
      </ConfigProvider>
    </div>
  );
};

export default Library;
