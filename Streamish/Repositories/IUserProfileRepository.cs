using Streamish.Models;
using System.Collections.Generic;

namespace Streamish.Repositories
{
    public interface IUserProfileRepository
    {
        UserProfile GetById(int id);
        void Delete(int id);
        void Update(UserProfile user);
        void Add(UserProfile user);
        List<UserProfile> GetAll();
        UserProfile GetUserProfileByIdWithVideos(int id);
    }
}