const { Song } = require('../models');

module.exports = {
    create(req, res) {
        return Song.create({
            title: req.body.title,
            artist: req.body.artist,
            genre: req.body.genre,
            duration: req.body.duration,
            albumImg: req.body.albumImg
        })
        .then(song => res.status(201).send(song))
        .catch(error => res.status(400).send(error))
    },
    list(req, res) {
        return Song.findAll({})
        .then(song => res.status(200).send(song))
        .catch(error => res.status(400).send(error))
    },
    find(req, res) {
        return Song.findAll({
            where: {
                id: req.params.id,
            }
        })
        .then(song => res.status(200).send(song))
        .catch(error => res.status(400).send(error))
    },
    update(req, res) {
        return Song.update(
            {
                title: req.body.title,
                artist: req.body.artist,
                genre: req.body.genre,
                duration: req.body.duration,
                albumImg: req.body.albumImg
            },
            {
                where: { id: req.params.id }
            }
        )
        .then(updated => {
            if (updated[0] == 0) {
                return res.status(404).send({ message: 'song not found' });
            }
            return res.status(200).send({ message: 'song updated successfully'});
        })
        .catch(error => res.status(400).send(error));
    },
    delete(req, res) {
        return Song.destroy({
            where: { id: req.params.id }
        })
        .then(deleted => {
            if (!deleted) {
                return res.status(404).send({ message: 'song not found' });
            }
            return res.status(200).send({ message: 'song deleted successfully' });
        })
        .catch(error => res.status(400).send(error));
    }

}