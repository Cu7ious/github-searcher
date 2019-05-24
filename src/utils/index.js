/**
 * This module exports the collection of the utils
 * used in the app
 */

/**
 * sortByName - lexicographically sorts the data by the `full_name` property
 * @data: [Array] - "items" property from the GitHub API v3 search response
 * 
 * Returns: sorted data [Array]
*/
export function sortByName(data) {
  return data.sort(function (a, b) {
    const aFullName = a.full_name.toLowerCase();
    const bFullName = b.full_name.toLowerCase();

    if (aFullName < bFullName) {
      return -1;
    }

    if (aFullName > bFullName) {
      return 1;
    }

    return 0;
  });
}

/**
 * sortByDate - sorts the data by the `created_at` property
 * @data: [Array] - "items" property from the GitHub API v3 search response
 * 
 * Returns: sorted data [Array]
 */
export function sortByDate(data) {
  return data.sort(function (a, b) {
    a = new Date(a.created_at);
    b = new Date(b.created_at);

    if (a < b) {
      return -1;
    }

    if (a > b) {
      return 1;
    }

    return 0;
  });
}

/**
 * prefixDay - defines the day suffix based on the order number of the day
 * @day: [Number] - number of the day in month
 * 
 * Returns: suffixed day number [String]
 */
export function prefixDay(day) {
  if (day > 3 && day < 14) {
    return day + "th";
  } else if (day < 4) {
    switch (day) {
      case 1:
        return day + "st";
      case 2:
        return day + "nd";
      default:
        return day + "rd";
    }
  } else {
    day = String(day);

    switch (day.charAt(1)) {
      case "1":
        return day + "st";
      case "2":
        return day + "nd";
      case "3":
        return day + "rd";
      default:
        return day + "th";
    }
  }
}

/**
 * createMonthsList - defines the list of the names of months
 * 
 * Returns: List of the names of months [Array]
 */
export const createMonthsList = () => [
  "Jan", "Feb", "Mar",
  "Apr", "May", "Jun",
  "Jul", "Aug", "Sep",
  "Oct", "Nov", "Dec"
];

/**
 * bindSidebarToReactApp - binds the sidebar DOM node to the React App.
 * Adds event listeners related to the sidebar logic
 */
export function bindSidebarToReactApp() {
  const sidebarCloseButton = document.querySelector("#main-sidebar button");
  const magnetOverlay = document.getElementById("magnet-overlay");
  const navButton = document.getElementById("app-main-nav-button");
  const classList = document.body.classList;

  function handleCloseSidebar(e) {
    const len = document.body.classList.length;

    if (e.type === "keyup" && e.keyCode === 27) {
      if (!classList.contains("ReactModal__Body--open")) {
        if (len && !classList.contains("active-left-place")) {
          classList.add("active-left-place");
        }
      }

      classList.remove("active-left-place");
    } else if (e.type === "click") {
      classList.toggle("active-left-place");
    }
  }

  document.addEventListener("keyup", handleCloseSidebar, false);
  magnetOverlay.addEventListener("click", handleCloseSidebar, false);
  sidebarCloseButton.addEventListener("click", handleCloseSidebar, false);

  navButton.addEventListener("click",
    e => {
      e.preventDefault();
      classList.add("active-left-place")
    },
    false
  );
}