import React from 'react';
import { Link } from 'react-router';

const Sidebar = (props) => {
  const playlists = props.playlists;

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item">
          <Link to='/albums'>ALBUMS</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to='/artists'>ARTISTS</Link>
        </h4>
      </section>
      <hr />
      <section>
        <h4 className="text-muted">PLAYLISTS</h4>
        <h4>
            <ul className="list-unstyled">
              {
                playlists.map(playlist => {
                  return (
                    <li key={playlist.id} className="playlist-item menu-item">
                      <Link to="FILL_ME_IN">{playlist.name}</Link>
                    </li>
                    )
                })
              }
            </ul>

          <Link className="btn btn-primary btn-block" to='/newplaylist'>
            <span className="glyphicon glyphicon-plus"></span> PLAYLIST
          </Link>
        </h4>
      </section>

    </sidebar>
  );
}

export default Sidebar;
