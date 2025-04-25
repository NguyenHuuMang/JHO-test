import {
  useState,
  useEffect,
  createContext,
  useContext,
  Dispatch,
} from "react";
import { User } from "../../common/type";
import { useNavigate } from "react-router-dom";
import { fakeUser } from "../../api/fakeData";

interface AuthContextType {
  currentUser: User | null;
  setCurrentUser: Dispatch<React.SetStateAction<any | null>>;
  login: (email: string, password: string) => Promise<User>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  const checkUserLoggedIn = () => {
    try {
      const userListingString = localStorage.getItem("userListing");
      if (userListingString) {
        const userListing = JSON.parse(userListingString);
        const user = userListing[0];
        if (user && user.token) {
          setCurrentUser(user);
        } else {
          setCurrentUser(null);
        }
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
      setCurrentUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = (email: string, password: string): Promise<User> => {
    return new Promise((resolve, reject) => {
      try {
        let userListing = [];
        const existingData = localStorage.getItem("userListing");

        if (existingData) {
          userListing = JSON.parse(existingData);
        } else {
          userListing = fakeUser;
          localStorage.setItem("userListing", JSON.stringify(userListing));
        }
        const user = userListing.find(
          (user: User) => user.email === email && user.password === password
        );

        if (user) {
          setCurrentUser(user);
          resolve(user);
        } else {
          reject(new Error("Email or Password is not matching!"));
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("token");
  };

  const value: AuthContextType = {
    currentUser,
    setCurrentUser,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
